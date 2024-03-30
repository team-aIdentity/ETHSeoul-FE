import { useNavigate } from "react-router-dom";
import "./Cart.css";
import CartList from "./CartList";
import { useContext } from "react";
import CartContext from "../../../components/context/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const amount = useContext(CartContext).amount;
  const onNavigate = (e) => {
    e.preventDefault();
    if (amount != 0) {
      navigate("/payment");
    } else {
      alert("Cart is Empty");
    }
  };
  return (
    <div id="cart">
      <p className="title">Cart</p>
      <p className="sub-title">
        Please review the product before making the purchase
      </p>
      <CartList />
      <button className="buy-button" onClick={onNavigate}>
        Buy
      </button>
    </div>
  );
}
