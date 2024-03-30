import { Link } from "react-router-dom";
import Polygon from "../../../components/common/Polygon";
import "./CardType1.css";

export default function CardType1({ img, title, auther, pageId }) {
  return (
    <div className="card1">
      <img src={img} alt="img" />
      <div className="link-box">
        <div className="title-box">
          <Link to={pageId}>
            <p className="title">{title}</p>
            <Polygon size="20" />
          </Link>
          <p className="auther">{auther}</p>
        </div>
        <div className="buy-box">
          <button className="cart">Cart</button>
          <button className="mint-buy">Mint Buy</button>
        </div>
      </div>
    </div>
  );
}
