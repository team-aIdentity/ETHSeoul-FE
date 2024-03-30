import { useParams } from "react-router-dom";
import "./ShopLayout.css";
import FandomShop from "../pages/content/shop/FandomShop";
import ConcertShop from "../pages/content/shop/ConcertShop";
import PerformanceShop from "../pages/content/shop/PerformanceShop";
import CelebrityShop from "../pages/content/shop/CelebrityShop";

export default function ShopLayout() {
  const dummyList = [
    {
      title: "Fandom",
      list: ["ALL", "SINGER", "DANCER", "RAPPER", "IDOL", "COMEDIAN"],
      element: <FandomShop />,
    },
    {
      title: "CONCERT",
      list: ["ALL", "HOT 100", "BAND", "SINGER", "HIP-HOP", "IDOL"],
      element: <ConcertShop />,
    },
    {
      title: "PERFORMANCE",
      list: ["ALL", "BUSKING", "STANDING COMEDY", "SHOW CASE", "FAN MEETING"],
      element: <PerformanceShop />,
    },
    {
      title: "CELEBRITY",
      list: ["ALL", "YOUTUBE", "INSTARGRAM", "TIKTOK", "BIGO LIVE", "OTHER"],
      element: <CelebrityShop />,
    },
  ];

  const { pageId } = useParams();
  const pageIdNum = Number(pageId);

  return (
    <div className="shop">
      <div className="filter">
        <p className="title">{dummyList[pageIdNum].title}</p>
        <ul className="list">
          {dummyList[pageIdNum].list.map((value, index) => (
            <li key={index}>
              <button>{value}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">{dummyList[pageId].element}</div>
    </div>
  );
}
