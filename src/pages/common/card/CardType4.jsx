import { Link } from "react-router-dom";
import Polygon from "../../../components/common/Polygon";
import "./CardType4.css";

export default function CardType4({
  img,
  title,
  auther,
  pageId,
  width,
  height,
  isPolygon,
}) {
  return (
    <div
      className="card4"
      style={{
        width: width,
        height: height,
      }}
    >
      <img src={img} alt="img" />
      <div className="link-box">
        <div className="title-box">
          <Link to={`/${pageId}`}>
            <p className="title">{title}</p>
            {isPolygon && <Polygon size="20" />}
          </Link>
          <p className="auther">{auther}</p>
        </div>
      </div>
    </div>
  );
}
