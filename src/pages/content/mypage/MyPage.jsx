import "./MyPage.css";

import CardType3 from "../../common/card/CardType3";
import img1 from "../../../assets/cardImg/bm-img.png";
import profile from "../../../assets/mypage/profile.png";
import { useContext } from "react";
import MainContext from "../../../components/context/MainContext";

export default function MyPage() {
  const userName = useContext(MainContext).userName;

  return (
    <div className="my-page">
      <div className="banner"></div>
      <div className="icon-box">
        <img src={profile} alt="profile" />
        <p className="title">{userName}</p>
        <div className="sub-title">
          <p>0x000....0000</p>
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
          <CardType3
            img={img1}
            pageId="bm-3"
            title="Bruno Mars X Hyundae Card"
            auther="Bruno Mars , Hyundae Card"
          />
          <CardType3
            img={img1}
            pageId="bm-3"
            title="Bruno Mars X Hyundae Card"
            auther="Bruno Mars , Hyundae Card"
          />
          <CardType3
            img={img1}
            pageId="bm-3"
            title="Bruno Mars X Hyundae Card"
            auther="Bruno Mars , Hyundae Card"
          />
          <CardType3
            img={img1}
            pageId="bm-3"
            title="Bruno Mars X Hyundae Card"
            auther="Bruno Mars , Hyundae Card"
          />
          <CardType3
            img={img1}
            pageId="bm-3"
            title="Bruno Mars X Hyundae Card"
            auther="Bruno Mars , Hyundae Card"
          />
          <CardType3
            img={img1}
            pageId="bm-3"
            title="Bruno Mars X Hyundae Card"
            auther="Bruno Mars , Hyundae Card"
          />
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
          <p className="value">0x0000000000000000000000000000000000000000</p>
        </div>
      </div>
    </div>
  );
}
