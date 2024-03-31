import "./MyPage.css";

import CardType3 from "../../common/card/CardType3";
import img1 from "../../../assets/cardImg/bm-img.png";
import img2 from "../../../assets/detailpage/yoasobi.png";
import profile from "../../../assets/mypage/profile.png";
import { useContext } from "react";
import MainContext from "../../../components/context/MainContext";
import CartContext from "../../../components/context/CartContext";

export default function MyPage() {
  const userName = useContext(MainContext).userName;
  const walletAddress = useContext(MainContext).walletAddress;
  const isBuy = useContext(CartContext).isBuy;

  const walletSlice = `${walletAddress.slice(0,5)}....${walletAddress.slice(-4)}`

  return (
    <div className="my-page">
      <div className="banner"></div>
      <div className="icon-box">
        <img src={profile} alt="profile" />
        <p className="title">{userName}</p>
        <div className="sub-title">
          <p>{walletSlice}</p>
          <button className="copy">
            <i className="bx bx-copy" />
          </button>
        </div>
      </div>

      <div className="divider">
        <p className="title">My Ticket</p>
      </div>
      <div className="ticket-box">
        <ul className="slide-box">
          <CardType3
            img={img1}
            pageId="bm-3"
            title="Bruno Mars X Hyundae Card"
            auther="Bruno Mars , Hyundae Card"
          />
          {isBuy && <CardType3
            img={img2}
            pageId="ys"
            title="Yoasobi Asia Tour in Seoul"
            auther="Yoasobi"
          />}
        </ul>
      </div>

      <div className="divider">
        <p className="title">My Account</p>
      </div>
      <div className="account-box">
        <div className="box">
          <p className="title">User Name</p>
          <p className="value">{userName}</p>
        </div>
        <div className="box">
          <p className="title">
            User Information <span>(Wallet)</span>
          </p>
          <p className="value">{walletAddress}</p>
        </div>
      </div>
    </div>
  );
}
