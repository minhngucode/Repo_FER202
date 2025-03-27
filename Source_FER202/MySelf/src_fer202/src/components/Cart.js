// src/components/Cart.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Table, Button, Form } from 'react-bootstrap';

function Cart() {
  const { state } = useLocation();
  const [cartProducts, setCartProducts] = useState(state?.cart || []); // Danh sách sản phẩm trong giỏ hàng
  console.log('cartProducts: ',cartProducts);
  const [selectedProducts, setSelectedProducts] = useState([]); // Danh sách sản phẩm được chọn để thanh toán
  const navigate = useNavigate();

  // Xử lý khi người dùng chọn/bỏ chọn sản phẩm
  const handleProductSelection = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  // Xử lý thanh toán
  const processCheckout = () => {
    if (selectedProducts.length === 0) {
      alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán!');
      return;
    }

    const selectedItems = cartProducts.filter((product) =>
      selectedProducts.includes(product.id)
    );
    const totalAmount = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    alert(`Thanh toán thành công! Tổng tiền: ${totalAmount} VNĐ`);
    navigate('/products');
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Giỏ Hàng</h2>
      {cartProducts.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <>
          {/* Bảng hiển thị danh sách sản phẩm trong giỏ hàng */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Chọn</th>
                <th>Sản Phẩm</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Form.Check
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleProductSelection(product.id)}
                    />
                  </td>
                  <td>
                    {product.description} - {product.price} VNĐ x {product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>
            Tổng tiền (đã chọn):{' '}
            {cartProducts
              .filter((product) => selectedProducts.includes(product.id))
              .reduce((sum, item) => sum + item.price * item.quantity, 0)} VNĐ
          </p>
          <Button variant="success" onClick={processCheckout} className="me-2">
            Thanh Toán
          </Button>
          <Button variant="secondary" onClick={() => navigate('/products')}>
            Quay Lại
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;