import CardType1 from "../../../common/card/CardType1";
import img1 from "../../../../assets/image2.png";
import img2 from "../../../../assets/image3.png";
import Divider from "../Divider";

export default function PreOrderContainer() {
  return (
    <>
      <Divider title="Pre-Order" to="/preorder" />
      <div className="preorder-box">
        <CardType1
          img={img1}
          title="Ed Sheeran Live in Seoul"
          pageId="edSheeranLive-3"
          auther="Ed Sheeran"
        />
        <CardType1
          img={img2}
          title="Mr.Beast Youtube Show"
          pageId="mrBeastShow-2"
          auther="Mr.Beast"
        />
      </div>
    </>
  );
}
