import { useContext, useState } from "react";
import CartContext from "../../../components/context/CartContext";
import { Link } from "react-router-dom";

export default function TitleContainer() {
  const plusAmount = useContext(CartContext).plusAmount;
  const amount = useContext(CartContext).amount;
  const [isHeartClick, setHeartClick] = useState(false);
  const fandomList = [
    {
      name: "Yoasobi",
      heart: 4.5,
      review: 8,
      price: "120 $",
      information: [
        "2024-05-30",
        "246, Itaewon-ro, Yongsan-gu, Seoul, Republic of Korea",
        "2024-03-29 09:00",
        "2024-03-31 00:00",
      ],
    },
  ];

  const informationList = [
    "DATE :",
    "LOCATION :",
    "START DATE :",
    "END DATE :",
  ];

  const setHeartClickHandler = () => {
    setHeartClick(!isHeartClick);
  };

  const addCartHandler = () => {
    if (amount == 0) {
      plusAmount();
    }
  };

  return (
    <div className="title-box1">
      <div className="title">{fandomList[0].name}</div>
      <div className="follower-box">
        <button className="heart-button" onClick={setHeartClickHandler}>
          {!isHeartClick && <i className="bx bx-heart" />}
          {isHeartClick && <i class="bx bxs-heart"></i>}
        </button>
        <p className="heart">{fandomList[0].heart}</p>
        <p className="follower">{fandomList[0].review} Review</p>
      </div>
      <p className="price">{fandomList[0].price}</p>
      <p className="price-about">12p (1%) Point Reward</p>
      <div className="information-box">
        <ul className="information-title">
          <li>information</li>
        </ul>
        <ul className="information-sub-title">
          {informationList.map((value, index) => (
            <li key={index}>
              <p className="title">{value}</p>
              <p className="value">{fandomList[0].information[index]}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="buy-box">
        <button className="cart-button" onClick={plusAmount}>
          Add Cart
        </button>
        <Link className="buy-button" to="/cart" onClick={addCartHandler}>
          Buy Mint
        </Link>
      </div>
    </div>
  );
}
