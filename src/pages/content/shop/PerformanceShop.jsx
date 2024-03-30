import CardType4 from "../../common/card/CardType4";
import img1 from "../../../assets/cardImg/bm-img.png";
import img2 from "../../../assets/cardImg/jk-img.png";
import img3 from "../../../assets/cardImg/usher-img.png";

export default function PerformanceShop() {
  return (
    <>
      <CardType4
        img={img1}
        title="Bruno Mars X Hyundae Card"
        auther="Bruno Mars , Hyundae Card"
        pageId="bm"
      />
      <CardType4
        img={img2}
        title="Jung Kook Summer Series Concert"
        auther="Jung Kook"
        pageId="jk"
      />
      <CardType4
        img={img3}
        title="Usher X Concert"
        auther="Usher"
        pageId="us"
      />
      <CardType4
        img={img1}
        title="Bruno Mars X Hyundae Card"
        auther="Bruno Mars , Hyundae Card"
        pageId="bm-8"
      />
      <CardType4
        img={img1}
        title="Bruno Mars X Hyundae Card"
        auther="Bruno Mars , Hyundae Card"
        pageId="bm-8"
      />
      <CardType4
        img={img3}
        title="Bruno Mars X Hyundae Card"
        auther="Bruno Mars , Hyundae Card"
        pageId="bm-8"
      />
    </>
  );
}
