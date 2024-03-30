import logo from "../../../assets/logo.png";
import HeaderList, { SubTitle, Title, User } from "./HeaderList";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="link-box">
        <div className="box1">
          <HeaderList arr={Title} className="title" />
          <HeaderList arr={SubTitle} className="sub-title" />
        </div>
        <div className="box2">
          <HeaderList arr={User} className="user" />
          <div className="search">
            <input type="text" />
            <button>
              <i className="bx bx-search" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
