import { createPortal } from "react-dom";
import "../StoryModal.css";
import img1 from "../../../../assets/fandom/yoasobi-img.png";

const BackDrop = ({ setModal }) => {
  const setModalOnHandler = (e) => {
    e.preventDefault();
    setModal(false);
  };
  return <button className="back-drop" onClick={setModalOnHandler}></button>;
};

const CommentList = () => {
  return (
    <li>
      <img src={img1} alt="profile" />
      <div className="title-box">
        <p className="title">Yoasobi</p>
        <p className="sub-title">2024-03-29 11:00 </p>
      </div>
      <p className="comment">Happy Birthday Yoasobi !!</p>
    </li>
  );
};

const StoryContainer = ({ setModal }) => {
  const setModalOnHandler = (e) => {
    e.preventDefault();
    setModal(false);
  };

  return (
    <div id="story-container">
      <div className="img">
        <img src={img1} alt="profile" />
      </div>
      <div className="information">
        <div className="navigate">
          <img src={img1} alt="profile" />
          <div className="title-box">
            <p className="title">Yoasobi</p>
            <p className="sub-title">2024-03-29 11:00 </p>
          </div>
          <button onClick={setModalOnHandler}>
            <i className="bx bx-x" />
          </button>
        </div>
        <div className="description">
          <p className="title">Yoasobi 4th Birthday !!</p>
          <p className="sub-title">
            Today marks the 4th anniversary of our debut. Thank you to the
            <br />
            fans who always loved and supported us !! 🥰
          </p>
        </div>
        <ul className="comment-box">
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
        </ul>
      </div>
    </div>
  );
};

export default function StoryModal({ setModal }) {
  const portalElement = document.getElementById("modal");
  return (
    <>
      {createPortal(
        <div id="modal-container">
          <BackDrop setModal={setModal} />
          <StoryContainer setModal={setModal} />
        </div>,
        portalElement
      )}
    </>
  );
}
