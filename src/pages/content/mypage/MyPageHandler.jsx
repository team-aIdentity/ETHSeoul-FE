import { useContext, useEffect } from "react";
import MainContext from "../../../components/context/MainContext";
import { useNavigate } from "react-router-dom";
import MyPage from "./MyPage";

export default function MyPageHandler() {
  const isLogin = useContext(MainContext).isLogin;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) navigate("/user/login");
  }, []);

  return <>{isLogin && <MyPage />}</>;
}
