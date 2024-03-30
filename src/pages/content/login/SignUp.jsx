import listLogo from "../../../assets/login/list-logo.png";
import navBkLogo from "../../../assets/login/navigation-back-logo.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";

import profileImgFile from "../../../assets/mypage/profile.png";

import "./SignUp.css";
import MainContext from "../../../components/context/MainContext";

export default function SignUp() {
  const [isChecked, setIsChecked] = useState(false);
  const [userName, setName] = useState("");
  const [userPW, setPW] = useState("");
  const [userCPW, setCPW] = useState("");
  const formData = new FormData();

  const setUserName = useContext(MainContext).setUserName;
  const setIsLogin = useContext(MainContext).setIsLogin;
  const setPostApi = async () => {
    try {
      formData.append("user_id", userName);
      formData.append("user_pw", userPW);
      formData.append("profile_img", profileImgFile);

      await axios.post("URL", {
        body: formData,
      });
    } catch (e) {
      console.error(e);
    }
  };

  // URL 수정 필요

  const navigate = useNavigate();

  const setUserInput = (e) => {
    if (e.target.className === "name") {
      setName(e.target.value.trim());
    } else if (e.target.className === "password") {
      setPW(e.target.value.trim());
    }
    if (e.target.className === "confirm-password") {
      setCPW(e.target.value.trim());
    }
  };

  const setUserInputSubmitHandler = () => {
    if (userName === "" || userPW === "") {
      alert("공백을 입력해주세요.");
    } else if (userPW !== userCPW) {
      alert("비밀번호가 서로 다릅니다.");
    } else if (isChecked === false) {
      alert("약관에 동의해주세요.");
    } else {
      setIsLogin(true);
      setUserName(userName);
      setPostApi();
      navigate("/");
    }
  };

  const onCheckedHandler = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="sign-up">
      <div className="nav">
        <button onClick={() => navigate(-1)}>
          <img src={navBkLogo} alt="logo" />
        </button>
      </div>
      <div className="create-id">
        <div className="title">Set User name</div>
        <div className="sub-title">Please set your Aidentity username.</div>
        <input
          type="text"
          className="name"
          placeholder="User Name"
          onChange={setUserInput}
        />
        <div className="label">
          <img src={listLogo} alt="list-logo" />
          <p className="title">1 character minimum, 30 characters maximum</p>
        </div>
      </div>
      <div className="create-password">
        <div className="title">Set User Password</div>
        <div className="sub-title">
          Please set a password to use for Aidentity
        </div>
        <input
          className="password"
          type="password"
          placeholder="Password"
          onChange={setUserInput}
        />
        <input
          className="confirm-password"
          type="password"
          placeholder="Confirm password"
          onChange={setUserInput}
        />
        <div className="label">
          <img src={listLogo} alt="list-logo" />
          <p className="title">8 character minimum, 30 characters maximum</p>
        </div>
        <div className="label">
          <img src={listLogo} alt="list-logo" />
          <p className="title">
            Include at least one number and
            <br />
            one special character.
          </p>
        </div>
      </div>
      <div className="check-box">
        <div className="check-input-box">
          <input type="checkbox" onChange={onCheckedHandler} />
        </div>
        <p className="title">
          <span>(Required)</span> Agree to take responsibility
          <br />
          for password loss
        </p>
      </div>
      <button
        onClick={setUserInputSubmitHandler}
        className={isChecked ? `button submit` : `button`}
      >
        Next
      </button>
    </div>
  );
}
