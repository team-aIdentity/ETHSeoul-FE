import { useContext, useEffect, useState } from "react";
import img1 from "../../../assets/detailpage/yoasobi.png";
import img2 from "../../../assets/fandom/yoasobi-img.png";
import "./PayMentPage.css";
import MainContext from "../../../components/context/MainContext";
import CartContext from "../../../components/context/CartContext";

function CardType4({ title_img, profile_img, amount }) {
  return (
    <>
      <div className="concert-info">
        <img
          className="card-title-img"
          src={title_img}
          alt={"concert-title"}
        ></img>
        <div className="user-box">
          <div className="title-box">
            <div className="user-info">
              <img src={profile_img} alt={"profile-image"}></img>
              <p>Yoasobi</p>
            </div>
            <p className="concert-title">Yoasobi Asia Tour in Seoul</p>
          </div>
          <p className="item-counter">{amount} x</p>
        </div>
      </div>
      <div className="price-box">
        <span className="price-title">Ticket Price</span>
        <span className="total-price">120 $</span>
      </div>
      <div className="price-box">
        <span className="price-title">Total Price</span>
        <span className="total-price">{amount * 120} $</span>
      </div>
    </>
  );
}

export default function PayMentPage() {
  const mainCtx = useContext(MainContext);
  const cartCtx = useContext(CartContext);
  const [scrollCard, setScrollCard] = useState("");
  const paymentItems = [
    "User",
    "User Infromation",
    "Ticket Information",
    "Collection",
    "Selling Start Date",
    "Selling End Date",
    "Purchase Conditions",
    "Purchase Quantity",
  ];

  const paymentList = [
    mainCtx.userName,
    "0x00....0000",
    "Yoasobi Asia Tour in Seoul",
    "Yoasobi",
    "2024-03-29 09:00",
    "2024-03-31 00:00",
    "Free",
    cartCtx.amount,
  ];

  const paymentWays = ["Credit Card", "Pay"];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 140) {
      setScrollCard("down");
    } else {
      setScrollCard("");
    }
  };

  return (
    <div id="payment">
      <div className="buy-mint">
        <p className="title">Buy Mint</p>
        <p className="sub-title">
          Please review the product before making the purchase
        </p>
      </div>

      <div className="main-container">
        <div className="user-input-container">
          <ul className="contents">
            {paymentItems.map((item, index) => (
              <li key={index}>
                <p className="item">{item}</p>
                <p className="info">{paymentList[index]}</p>
              </li>
            ))}
          </ul>
          <p className="required-title">
            <span>(Required)</span> Personal information
          </p>
          <div className="input-user-data">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <div className="user-phone">
              <input className="phone-code" type="number" placeholder="+82" />
              <input
                className="phone-number"
                type="number"
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="fandom">
            <p className="title">FANDOM</p>
            <select>
              <option>Yoasobi</option>
              <option>Yoasobi</option>
            </select>
          </div>

          <div className="payment">
            <div className="title-box">
              <p className="title">Payment</p>
            </div>
            <ul>
              {paymentWays.map((way, index) => (
                <li key={index}>
                  <p className="title">{way}</p>
                  <div className="checkbox">
                    <input type="checkbox" />
                  </div>
                </li>
              ))}
            </ul>
            <div className="required-box">
              <div className="checkbox">
                <input type="checkbox" />
              </div>
              <p className="required-title">
                <span>(Required)</span> Consent to the collection and use <br />
                of personal information
              </p>
            </div>
            <button className="submit">OK</button>
          </div>
        </div>
        <div className={`card-container ${scrollCard}`}>
          <CardType4
            title_img={img1}
            profile_img={img2}
            amount={cartCtx.amount}
          />
        </div>
      </div>
    </div>
  );
}
