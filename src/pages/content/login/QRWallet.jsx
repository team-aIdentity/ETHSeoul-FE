import { useContext } from "react";
import qrCodeImg from "../../../assets/login/qr-code-logo.png";
import "./QRWallet.css";
import MainContext from "../../../components/context/MainContext";
import { useNavigate } from "react-router-dom";

export default function QRWallet() {
  const navigate = useNavigate();
  const userName = useContext(MainContext).userName;

  const onClick = () => {
    navigate("/");
  };
  return (
    <div className="qr-wallet">
      <div className="qr-box">
        <p className="title">Welcome Aidentity Shop !</p>
        <img src={qrCodeImg} alt="" />
      </div>
      <div className="wallet">
        <div className="title-box">
          <div className="user-box">
            <p className="title">{userName}</p>
            <p className="sub-title">0x000....0000</p>
          </div>
          <button className="copy">
            <i className="bx bx-copy" />
          </button>
        </div>
        <button className="submit" onClick={onClick}>
          ok
        </button>
      </div>
    </div>
  );
}
