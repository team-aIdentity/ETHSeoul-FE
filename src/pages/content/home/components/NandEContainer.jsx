import Divider from "../Divider";
import img1 from "../../../../assets/homeNandE/img1.png";

export default function NandEContainer() {
  return (
    <>
      <Divider title="Notice & Event" to="/nande" />
      <div className="nande-box">
        <img src={img1} alt="img" />
        <img src={img1} alt="img" />
      </div>
    </>
  );
}
