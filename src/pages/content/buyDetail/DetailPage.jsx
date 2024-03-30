import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../../../assets/detailpage/yoasobi.png";
import CardType4 from "../../common/card/CardType4";

export default function ProfileContainer() {
  const { pageId } = useParams();
  const [isHeartClick, setHeartClick] = useState(false);
  const fandomList = [
    {
      name: "Yoasobi",
      heart: 4.5,
      review: 8,
      description:
        "A Japanese music project unit. It is a two-member unit consisting of Ayase, a former Vocaloid producer, who writes lyrics and produces, and ikura, who is in charge of vocals.",
      information: ["Band", "Japan", "2019"],
    },
  ];

  const informationList = [
    "DATE :",
    "LOCATION :",
    "START DATE :",
    "END DATE :",
  ];

  const setHeartClickHandler = () => {
    setHeartClick(!isHeartClick);
  };

  return (
    <div className="detail-page">
      <CardType4
        img={img1}
        title="Yoasobi Asia Tour in Seoul"
        auther="Yoasobi"
        pageId=""
        width="650px"
        height="650px"
        isPolygon="false"
      />
      <div className="title-box">
        <div className="title">{fandomList[pageId].name}</div>
        <div className="follower-box">
          <button className="heart-button" onClick={setHeartClickHandler}>
            {!isHeartClick && <i className="bx bx-heart" />}
            {isHeartClick && <i class="bx bxs-heart"></i>}
          </button>
          <p className="heart">{fandomList[pageId].heart}</p>
          <p className="follower">{fandomList[pageId].review} Review</p>
          <ul className="link-box">
            {linkBoxIconList.map((i, index) => (
              <Link to={fandomList[pageId].link[index]} key={index}>
                <img src={i} alt={index} />
              </Link>
            ))}
          </ul>
        </div>
        <p className="description">{fandomList[pageId].description}</p>
        <div className="information-box">
          <ul className="information-title">
            <li>information</li>
          </ul>
          <ul className="information-sub-title">
            {informationList.map((value, index) => (
              <li key={index}>
                <p className="title">{value}</p>
                <p className="value">{fandomList[pageId].information[index]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
