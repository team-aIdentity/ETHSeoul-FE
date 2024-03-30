import PreOrderContainer from "./components/PreOrderContainer";
import FandomContainer from "./components/FandomContainer";
import NandEContainer from "./components/NandEContainer";
import MainImgContainer from "./components/MainImgContainer";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <MainImgContainer />
      <div className="container">
        <PreOrderContainer />
        <FandomContainer />
        <NandEContainer />
      </div>
    </div>
  );
}
