import { useContext } from "react";
import CartContext from "../../../components/context/CartContext";
import img1 from "../../../assets/detailpage/yoasobi.png";
import img2 from "../../../assets/fandom/yoasobi-img.png";

const ItemBox = (props) => {
  const resetAmount = useContext(CartContext).resetAmount;
  const onResetHandler = (e) => {
    e.preventDefault();
    resetAmount();
  };
  return (
    <li id="item">
      <div className="title-box">
        <div className="img-box">
          <img src={img1} alt="logo" />
          <div className="box">
            <div className="profile-box">
              <img src={img2} alt="profile" />
              <p className="title">Yoasobi</p>
            </div>
            <p className="description">Yoasobi Asia Tour in Seoul</p>
            <p className="amount">{props.amount}x</p>
          </div>
        </div>
        <div className="price-box">
          <span className="price-title">Ticket Price</span>
          <span className="total-price">120 $</span>
        </div>
        <div className="price-box">
          <span className="price-title">Total Price</span>
          <span className="total-price">{props.totalPrice} $</span>
        </div>
      </div>

      <div className="add-minus-box">
        <div className="reset-box">
          <button className="reset" onClick={onResetHandler}>
            <i className="bx bx-x" />
          </button>
        </div>
        <div className="button-box">
          <button className="add" onClick={props.plusAmount}>
            +
          </button>
          <button className="minus" onClick={props.minusAmount}>
            -
          </button>
        </div>
      </div>
    </li>
  );
};

export default function CartList() {
  const cartCtx = useContext(CartContext);
  return (
    <ul className="cart-list">
      {cartCtx.amount != 0 && (
        <ItemBox
          amount={cartCtx.amount}
          totalPrice={cartCtx.totalPrice}
          plusAmount={cartCtx.plusAmount}
          minusAmount={cartCtx.minusAmount}
        />
      )}
      {cartCtx.amount == 0 && <p className="empty">Cart is Empty</p>}
    </ul>
  );
}
