import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../../../../assets/fandom/yoasobi-img.png";
import x from "../../../../assets/fandom/x.png";
import instagram from "../../../../assets/fandom/instagram.png";
import youtube from "../../../../assets/fandom/youtube.png";

export default function ProfileContainer() {
  const { profileId } = useParams();
  const [isHeartClick, setHeartClick] = useState(false);
  const fandomList = [
    {
      name: "Yoasobi",
      heart: 4.5,
      follower: 25070,
      description:
        "A Japanese music project unit. It is a two-member unit consisting of Ayase, a former Vocaloid producer, who writes lyrics and produces, and ikura, who is in charge of vocals.",
      information: ["Band", "Japan", "2019"],
      link: [
        "https://www.instagram.com/yoasobi_staff_/",
        "https://twitter.com/YOASOBI_staff",
        "https://www.youtube.com/channel/UCI6B8NkZKqlFWoiC_xE-hzA",
      ],
    },
  ];

  const linkBoxIconList = [instagram, x, youtube];

  const informationList = ["Genrn :", "Contury :", "Debut :"];

  const setHeartClickHandler = () => {
    setHeartClick(!isHeartClick);
  };

  return (
    <div className="profile">
      <img src={img1} alt="profile" />
      <div className="title-box">
        <div className="title">{fandomList[profileId].name}</div>
        <div className="follower-box">
          <button className="heart-button" onClick={setHeartClickHandler}>
            {!isHeartClick && <i className="bx bx-heart" />}
            {isHeartClick && <i class="bx bxs-heart"></i>}
          </button>
          <p className="heart">{fandomList[profileId].heart}</p>
          <p className="follower">{fandomList[profileId].follower} Fandom</p>
          <ul className="link-box">
            {linkBoxIconList.map((i, index) => (
              <Link to={fandomList[profileId].link[index]} key={index}>
                <img src={i} alt={index} />
              </Link>
            ))}
          </ul>
        </div>
        <p className="description">{fandomList[profileId].description}</p>
        <div className="information-box">
          <ul className="information-title">
            <li>information</li>
          </ul>
          <ul className="information-sub-title">
            {informationList.map((value, index) => (
              <li key={index}>
                <p className="title">{value}</p>
                <p className="value">
                  {fandomList[profileId].information[index]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
