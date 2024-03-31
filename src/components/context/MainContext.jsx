import React, { useState } from "react";

const MainContext = React.createContext({
  isLogin: false,
  userName: "",
  walletAddress: "",
  setIsLogin: () => {},
  setUserName: () => {},
  setWalletAddress: () => {},
});

export const MainContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [walletAddress, setWalletAddress] = useState("")

  return (
    <MainContext.Provider
      value={{
        isLogin: isLogin,
        userName: userName,
        walletAddress: walletAddress,
        setIsLogin: setIsLogin,
        setUserName: setUserName,
        setWalletAddress: setWalletAddress
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
