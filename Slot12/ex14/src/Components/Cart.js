import { useCart } from "./useCart";
import { Card, Button, Container, Alert } from "react-bootstrap";
import { useState } from "react";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalItems, totalValue } = useCart();
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const itemCount = cartItems.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});
  const uniqueItems = [...new Map(cartItems.map((item) => [item.id, item])).values()];
  const handleOrderConfirm = () => {
    setOrderConfirmed(true);
    setTimeout(() => {
      setOrderConfirmed(false);
      clearCart();
    }, 2000);
  };
  return (
    <Container className="cart mt-4 p-3">
      <h2 className="text-center">Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Value: ${totalValue}</p>
      {orderConfirmed && <Alert variant="success">Đơn hàng đã được xác nhận thành công!</Alert>}
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {uniqueItems.map((item) => (
            <Card key={item.id} className="mb-2 p-2 d-flex flex-row justify-content-between align-items-center">
              <span>
                {item.name} - ${item.price} (x{itemCount[item.id]})
              </span>
              <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                Remove 1
              </Button>
            </Card>
          ))}
          <Button className="clear-cart-btn mt-3" onClick={clearCart}>
            Clear Cart
          </Button>
          <Button className="order-btn mt-3 ms-2" onClick={handleOrderConfirm}>
            Xác nhận đơn hàng
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
