import React, { useState } from "react";

const CartContext = React.createContext({
  amount: 0,
  totalPrice: 0,
  plusAmount: () => {},
  minusAmount: () => {},
  resetAmount: () => {},
});

export const CartContextProvider = (props) => {
  const [amount, setAmount] = useState(0);
  const [totalPrice, setTotal] = useState(0);

  const plusAmount = () => {
    let newAmount = amount + 1;
    setAmount(newAmount);
    setTotalPriceHandler(newAmount);
  };
  const minusAmount = () => {
    if (amount > 0) {
      let newAmount = amount - 1;
      setAmount(newAmount);
      setTotalPriceHandler(newAmount);
    }
  };
  const setTotalPriceHandler = (newAmount) => {
    let newTotalPrice = newAmount * 120;
    setTotal(newTotalPrice);
  };
  const resetAmount = () => {
    setAmount(0);
    setTotalPriceHandler(0);
  };
  return (
    <CartContext.Provider
      value={{
        amount: amount,
        totalPrice: totalPrice,
        plusAmount: plusAmount,
        minusAmount: minusAmount,
        resetAmount: resetAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
