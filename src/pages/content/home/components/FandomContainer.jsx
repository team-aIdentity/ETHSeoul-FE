import CardType2 from "../../../common/card/CardType2";
import Divider from "../Divider";
import img3 from "../../../../assets/image4.png";
import img4 from "../../../../assets/image5.png";
import img5 from "../../../../assets/image6.png";
import img6 from "../../../../assets/image7.png";

export default function FandomContainer() {
  return (
    <>
      <Divider title="Fandom" to="/shop/0" />
      <div className="fandom">
        <CardType2 img={img3} pageId="be-11" title="Billie eilish" />
        <CardType2 img={img4} pageId="jk-21" title="Jung-Kook" />
        <CardType2 img={img5} pageId="kl-84" title="Khabane Lame" />
        <CardType2 img={img6} pageId="ys-19" title="YOASOBI" />
      </div>
    </>
  );
}
