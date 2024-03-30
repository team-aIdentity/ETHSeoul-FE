import img1 from "../../../assets/detailpage/yoasobi.png";
import CardType4 from "../../common/card/CardType4";
import "./DetailPage.css";
import TitleContainer from "./TitleContainer";

export default function ProfileContainer() {
  return (
    <div id="detail-page">
      <div id="box1">
        <CardType4
          img={img1}
          title="Yoasobi Asia Tour in Seoul"
          auther="Yoasobi"
          pageId="/"
          width="650px"
          height="650px"
          isPolygon={false}
        />
        <TitleContainer />
      </div>
      <div id="item-box"></div>
    </div>
  );
}
