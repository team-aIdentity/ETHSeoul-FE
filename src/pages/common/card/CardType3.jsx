import { Link } from "react-router-dom";
import Polygon from "../../../components/common/Polygon";
import "./CardType3.css";

export default function CardType3({ img, pageId, title, auther }) {
  return (
    <div className="card3">
      <img src={img} alt="img" />
      <div className="link-box">
        <Link to={pageId}>
          <p className="title">{title}</p>
          <Polygon size="20" />
        </Link>
        <p className="auther">{auther}</p>
      </div>
    </div>
  );
}
