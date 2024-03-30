import { useContext } from "react";
import MainContext from "../../../components/context/MainContext";
import QRWallet from "./QRWallet";
import Login from "./Login";

export default function LoginHandler() {
  const isLogin = useContext(MainContext).isLogin;
  return (
    <>
      {isLogin && <QRWallet />}
      {!isLogin && <Login />}
    </>
  );
}
