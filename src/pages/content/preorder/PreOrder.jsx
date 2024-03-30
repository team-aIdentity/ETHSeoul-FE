import { Link } from "react-router-dom";
import Polygon from "../../../components/common/Polygon";
import "./PreOrder.css";

const LiveBox = () => {
  return (
    <div className="live-box">
      <p className="timer">00:01:20</p>
      <div className="img" />
      <div className="link-box">
        <Link to="">
          <p className="title">Ed Sheeran Live in Seoul</p>
          <Polygon size="20" />
        </Link>
        <p className="auther">Ed Sheeran</p>
      </div>
    </div>
  );
};

export default function PreOrder() {
  return (
    <div className="preorder">
      <div className="preorder-title">Pre-Order</div>
      <LiveBox />
      <LiveBox />
      <LiveBox />
    </div>
  );
}
