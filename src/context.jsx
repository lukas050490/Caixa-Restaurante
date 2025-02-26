import { useState } from "react";
import PropTypes from "prop-types";
import { AppContext } from "./AppContext";




export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [cashRegister, setCashRegister] = useState(null);


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.name === product.name);

      if (existingProductIndex !== -1) {
        
        return prevCart.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
       
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.name === product.name);

      if (existingProductIndex !== -1) {
        return prevCart
          .map((item, index) =>
            index === existingProductIndex ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0); 
      }
      return prevCart;
    });
  };

  const checkout = (paymentMethod) => {
    if (cart.length === 0) return;
  
    setHistory((prevHistory) => {
      
      const newSale = {
        products: cart,
        total: cart.reduce((acc, p) => acc + p.price * p.quantity, 0),
        date: new Date().toLocaleString(),
        paymentMethod,
      };
  
      return [...prevHistory, newSale];
    });
  
    setCart([]); 
  };

  const removeFromHistory = (index) => {
    setHistory((prevHistory) => prevHistory.filter((_, i) => i !== index));
  };


  const closeCashRegister = () => {
    if (history.length === 0) return; 
  
    const summary = history.reduce(
      (acc, sale) => {
        acc.totalSales += sale.total;
  
        
        if (sale.paymentMethod === "Crédito") {
          acc.paymentMethods["Crédito"] = (acc.paymentMethods["Crédito"] || 0) + sale.total;
        } else if (sale.paymentMethod === "Débito") {
          acc.paymentMethods["Débito"] = (acc.paymentMethods["Débito"] || 0) + sale.total;
        } else {
         
          acc.paymentMethods[sale.paymentMethod] = (acc.paymentMethods[sale.paymentMethod] || 0) + sale.total;
        }
  
        return acc;
      },
      { totalSales: 0, paymentMethods: {} }
    );
  

  
    setCashRegister(summary); 
  };

  return (
    <AppContext.Provider value={{ cart, history, addToCart, removeFromCart, checkout, removeFromHistory, cashRegister, closeCashRegister }}>
      {children}
    </AppContext.Provider>
  );
};



AppProvider.propTypes = {
  children: PropTypes.node.isRequired,

};