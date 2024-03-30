import { Link } from "react-router-dom";
import Polygon from "../../../components/common/Polygon";

export default function Divider({ title, to }) {
  return (
    <div className="divider-box">
      <Link className="divider" to={to}>
        <p>{title}</p>
        <Polygon size="40" />
      </Link>
    </div>
  );
}
