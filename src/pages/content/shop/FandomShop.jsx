import CardType5 from "../../common/card/CardType5";
import img1 from "../../../assets/fandom/billie-eilish-img.png";
import img2 from "../../../assets/fandom/jannabi-img.png";
import img3 from "../../../assets/fandom/yoasobi-img.png";

export default function FandomShop() {
  return (
    <>
      <CardType5 img={img3} title="Yoasobi" profileId="0" />
      <CardType5 img={img2} title="Jannabi" profileId="1" />
      <CardType5 img={img1} title="Billie Eilish" profileId="2" />
      <CardType5 img={img1} title="Billie Eilish" profileId="2" />
      <CardType5 img={img3} title="Yoasobi" profileId="0" />
      <CardType5 img={img2} title="Jannabi" profileId="1" />
    </>
  );
}
