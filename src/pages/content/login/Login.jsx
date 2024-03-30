import logo from "../../../assets/logo.png";
import googleLogo from "../../../assets/login/google-logo.png";
import facebookLogo from "../../../assets/login/facebook-logo.png";
import appleLogo from "../../../assets/login/apple-logo.png";

import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const list = [
    {
      title: "Google",
      img: googleLogo,
    },
    {
      title: "Facebook",
      img: facebookLogo,
    },
    {
      title: "Apple",
      img: appleLogo,
    },
  ];

  const moveToPage = (e) => {
    e.preventDefault();
    navigate("/user/signup");
  };

  return (
    <div className="login">
      <div className="title-box">
        <img src={logo} alt="logo" />
        <p className="title">
          Welcome !!
          <br />
          Aidentity Shop
        </p>
      </div>
      <div className="link-box">
        <ul>
          {list.map((value, index) => (
            <li key={index}>
              <button onClick={moveToPage}>
                <img src={value.img} alt="logo" />
              </button>
              <p className="name">{value.title}</p>
            </li>
          ))}
        </ul>
        <p className="privacy-policy">
          You can immediately access it through your social account without
          <br />
          signing up. Your first login will be considered as{" "}
          <span>agreement</span> to the
          <br />
          terms of service and <span>privacy policy.</span>
        </p>
      </div>
    </div>
  );
}
