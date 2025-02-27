import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (dish) => {
    setCartItems((prev) => [...prev, dish]);
  };

  // Xóa từng món (không xóa hết cùng loại)
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index !== -1) {
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      }
      return prev;
    });
  };

  // Xóa toàn bộ giỏ hàng
  const clearCart = () => {
    setCartItems([]);
  };

  // Tổng số lượng món trong giỏ hàng
  const totalItems = cartItems.length;

  // Tổng giá trị giỏ hàng
  const totalValue = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems, totalValue }}>
      {children}
    </CartContext.Provider>
  );
};
