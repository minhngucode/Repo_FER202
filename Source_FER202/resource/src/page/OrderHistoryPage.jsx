import React, { useEffect, useState } from "react";
import axios from "axios";

const formatDate = (isoDate) => {
	const date = new Date(isoDate);
	const dd = String(date.getDate()).padStart(2, "0");
	const mm = String(date.getMonth() + 1).padStart(2, "0"); // Month starts from 0
	const yyyy = date.getFullYear();
	return `${dd}/${mm}/${yyyy}`;
};

const OrderHistoryPage = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:9999/orders")
			.then((res) => setOrders(res.data))
			.catch((err) => console.error("Error fetching orders:", err));
	}, []);

	const calculateTotalPrice = (products) => {
		return products.reduce((total, p) => total + p.price * p.quantity, 0);
	};

	return (
		<div className='m-4 mt-4'>
			<h2 className='fw-bold mb-4'>Order History</h2>
			<table className='table table-bordered'>
				<thead className=' text-center'>
					<tr>
						<th>OrderId</th>
						<th>OrderDate</th>
						<th>ShipAddress</th>
						<th>ProductList</th>
						<th>TotalPrice ($)</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => (
						<tr key={order.id}>
							<td className='text-center'>{order.id}</td>
							<td className='text-center'>{formatDate(order.orderDate)}</td>
							<td>{order.shipAddress}</td>
							<td>
								<ul className='mb-0 ps-3'>
									{order.products.map((p, idx) => (
										<li key={idx}>
											{p.id} {p.name} {p.price.toFixed(2)} × {p.quantity}
										</li>
									))}
								</ul>
							</td>
							<td className='text-end'>
								{calculateTotalPrice(order.products).toFixed(2)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default OrderHistoryPage;
