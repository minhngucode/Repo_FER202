import React, { useCallback, useMemo, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const useProductData = () => {
	const [state, setState] = useState({
		products: [],
		categories: [],
		selectedCategory: "All",
	});

	React.useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get("http://localhost:9999/products");
				const productsWithRate = response.data.map((product) => ({
					...product,
					rate:
						product.reviews.reduce((sum, r) => sum + r.rating, 0) /
						product.reviews.length,
				}));

				setState((prev) => ({
					...prev,
					products: productsWithRate,
					categories: ["All", ...new Set(response.data.map((p) => p.category))],
				}));
			} catch (err) {
				console.error("API error:", err);
			}
		};

		fetchProducts();
	}, []);

	const setSelectedCategory = useCallback((category) => {
		setState((prev) => ({ ...prev, selectedCategory: category }));
	}, []);

	const filteredProducts = useMemo(
		() =>
			state.selectedCategory === "All"
				? state.products
				: state.products.filter((p) => p.category === state.selectedCategory),
		[state.products, state.selectedCategory],
	);

	return { ...state, setSelectedCategory, filteredProducts };
};

const useCartManagement = () => {
	const [cart, setCart] = useState([]);
	const [shipAddress, setShipAddress] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [isCartExpanded, setIsCartExpanded] = useState(false);

	const addToCart = useCallback((product) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}
			// Automatically expand cart when adding first item
			setIsCartExpanded(true);
			return [
				...prevCart,
				{
					id: product.id,
					name: product.title,
					price: product.price,
					quantity: 1,
				},
			];
		});
	}, []);

	const removeFromCart = useCallback((id) => {
		setCart((prevCart) => {
			const updatedCart = prevCart.filter((item) => item.id !== id);
			// Collapse cart if it becomes empty
			if (updatedCart.length === 0) {
				setIsCartExpanded(false);
			}
			return updatedCart;
		});
	}, []);

	const placeOrder = useCallback(() => {
		if (!shipAddress.trim()) {
			alert("Please enter your shipping address.");
			return;
		}

		const order = {
			orderDate: new Date().toISOString(),
			products: cart,
			shipAddress: shipAddress,
		};

		axios
			.post("http://localhost:9999/orders", order)
			.then(() => {
				setSuccessMessage("Order placed successfully!");
				setCart([]);
				setShipAddress("");
				setIsCartExpanded(false);
				setTimeout(() => setSuccessMessage(""), 3000);
			})
			.catch((err) => {
				console.error("Failed to place order:", err);
				alert("Failed to place order!");
			});
	}, [cart, shipAddress]);

	return {
		cart,
		shipAddress,
		successMessage,
		isCartExpanded,
		setIsCartExpanded,
		addToCart,
		removeFromCart,
		setShipAddress,
		placeOrder,
	};
};

const ProductPage = () => {
	const {
		products,
		categories,
		selectedCategory,
		setSelectedCategory,
		filteredProducts,
	} = useProductData();

	const {
		cart,
		shipAddress,
		successMessage,
		isCartExpanded,
		setIsCartExpanded,
		addToCart,
		removeFromCart,
		setShipAddress,
		placeOrder,
	} = useCartManagement();

	return (
		<div className='m-4 mt-4'>
			<h2 className='text-center mb-4 fw-bold'>Shopping System</h2>
			<div className='row'>
				<div className='col-md-9'>
					<div className='d-flex justify-content-between align-items-center mb-3'>
						<select
							className='form-select w-50'
							value={selectedCategory}
							onChange={(e) => setSelectedCategory(e.target.value)}>
							{categories.map((cat, idx) => (
								<option key={idx} value={cat}>
									{cat === "All" ? "-- Select all category --" : cat}
								</option>
							))}
						</select>
					</div>

					<table className='table table-bordered table-striped'>
						<thead>
							<tr>
								<th>Title</th>
								<th>Category</th>
								<th>Price</th>
								<th>Rate</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{filteredProducts.map((product) => (
								<tr key={product.id}>
									<td>{product.title}</td>
									<td>{product.category}</td>
									<td>{product.price.toFixed(2)}</td>
									<td>{product.rate.toFixed(2)}</td>
									<td>
										<button
											className='btn btn-primary btn-sm'
											onClick={() => addToCart(product)}>
											Add To Cart
										</button>
									</td>
								</tr>
							))}
							{filteredProducts.length === 0 && (
								<tr>
									<td colSpan='5'>No products found.</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

				<div className='col-md-3'>
					<div class='text-end mb-3'>
						<Link to={`orders`} className='btn btn-success'>
							Orders History
						</Link>
					</div>

					<div className='border p-3'>
						<div className='d-flex justify-content-between align-items-center mb-3'>
							<h4 className='m-0'>Cart</h4>
							{cart.length > 0 && (
								<button
									className='btn btn-sm btn-outline-secondary'
									onClick={() => setIsCartExpanded(!isCartExpanded)}>
									{isCartExpanded ? "Collapse" : "Expand"}
								</button>
							)}
						</div>

						{cart.length === 0 ? (
							<div className='text-center'>
								<p className='text-muted mb-2'>Your cart is empty!</p>

								{successMessage && (
									<div>
										<h5 className='text-success fw-bold'>
											Thank you for your order!
										</h5>
										<p className='text-success'>
											Your order has been placed successfully.
										</p>
									</div>
								)}
							</div>
						) : (
							<>
								{isCartExpanded && (
									<table className='table table-sm text-center'>
										<thead>
											<tr>
												<th>Id</th>
												<th>Name</th>
												<th>Price</th>
												<th>Quantity</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											{cart.map((item) => (
												<tr key={item.id}>
													<td>{item.id}</td>
													<td>{item.name}</td>
													<td>${item.price.toFixed(2)}</td>
													<td>{item.quantity}</td>
													<td>
														<button
															className='btn btn-danger btn-sm'
															onClick={() => removeFromCart(item.id)}>
															Remove
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								)}

								{isCartExpanded && (
									<>
										<div className='mb-2'>
											<label className='form-label'>Ship Address</label>
											<textarea
												className='form-control'
												rows='2'
												value={shipAddress}
												onChange={(e) => setShipAddress(e.target.value)}
											/>
										</div>

										<button
											className='btn btn-warning w-100 fw-bold'
											onClick={placeOrder}>
											Place Order
										</button>
									</>
								)}

								{!isCartExpanded && (
									<div className='text-center'>
										<p>
											{cart.length} item(s) in cart Total: $
											{cart
												.reduce(
													(total, item) => total + item.price * item.quantity,
													0,
												)
												.toFixed(2)}
										</p>
									</div>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
