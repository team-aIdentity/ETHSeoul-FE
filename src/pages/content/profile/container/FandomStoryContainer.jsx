import Divider from "..//Divider";
import img2 from "../../../../assets/fandom/yoasobi-img.png";
import { useState } from "react";
import StoryModal from "./StoryModal";

export default function FandomStoryContainer() {
  const [isModal, setModal] = useState(false);
  const onModalHandler = (e) => {
    e.preventDefault();
    setModal(true);
  };
  return (
    <div id="fandom-story">
      {isModal && (
        <>
          <StoryModal setModal={setModal} />
        </>
      )}

      <Divider title="FANDOM STORY" />
      <div className="container">
        <button onClick={onModalHandler}>
          <img src={img2} alt="profile" />
        </button>
        <button onClick={onModalHandler}>
          <img src={img2} alt="profile" />
        </button>
        <button onClick={onModalHandler}>
          <img src={img2} alt="profile" />
        </button>
        <button onClick={onModalHandler}>
          <img src={img2} alt="profile" />
        </button>
        <button onClick={onModalHandler}>
          <img src={img2} alt="profile" />
        </button>
        <button onClick={onModalHandler}>
          <img src={img2} alt="profile" />
        </button>
        <button onClick={onModalHandler}>
          <img src={img2} alt="profile" />
        </button>
        <button onClick={onModalHandler}>
          <img src={img2} alt="profile" />
        </button>
      </div>
    </div>
  );
}
