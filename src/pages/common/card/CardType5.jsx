import { Link } from "react-router-dom";
import "./CardType5.css";

export default function CardType5({ img, title, profileId }) {
  return (
    <div className="card5">
      <img src={img} alt="img" />
      <div className="link-box">
        <Link to={`/detail/${profileId}`}>
          <p className="title">{title}</p>
        </Link>
      </div>
    </div>
  );
}
