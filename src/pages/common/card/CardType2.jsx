import { Link } from "react-router-dom";
import "./CardType2.css";

export default function CardType2({ img, pageId, title }) {
  return (
    <div className="card2">
      <img src={img} alt="img" />
      <div className="link-box">
        <Link to={pageId}>{title}</Link>
      </div>
    </div>
  );
}
