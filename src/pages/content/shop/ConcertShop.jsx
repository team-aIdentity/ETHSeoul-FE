import CardType4 from "../../common/card/CardType4";
import img1 from "../../../assets/detailpage/yoasobi.png";
import img2 from "../../../assets/cardImg/jk-img.png";
import img3 from "../../../assets/cardImg/usher-img.png";

export default function ConcertShop() {
  return (
    <>
      <CardType4
        img={img2}
        title="Jung Kook Summer Series Concert"
        auther="Jung Kook"
        pageId="jk"
        isPolygon={true}
      />
      <CardType4
        img={img1}
        title="Yoasobi Asia Tour in Seoul"
        auther="Yoasobi"
        pageId="shop/buypage/ys"
        isPolygon={true}
      />
      <CardType4
        img={img3}
        title="Usher X Concert"
        auther="Usher"
        pageId="us"
        isPolygon={true}
      />
      <CardType4
        img={img1}
        title="Yoasobi Asia Tour in Seoul"
        auther="Yoasobi"
        pageId="shop/buypage/ys"
        isPolygon={true}
      />
      <CardType4
        img={img3}
        title="Bruno Mars X Hyundae Card"
        auther="Bruno Mars , Hyundae Card"
        pageId="bm-8"
        isPolygon={true}
      />
      <CardType4
        img={img1}
        title="Yoasobi Asia Tour in Seoul"
        auther="Yoasobi"
        pageId="shop/buypage/ys"
        isPolygon={true}
      />
    </>
  );
}
