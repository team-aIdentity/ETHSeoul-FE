import React, { useState } from "react";

const MainContext = React.createContext({
  isLogin: false,
  userName: "",
  setIsLogin: () => {},
  setUserName: () => {},
});

export const MainContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <MainContext.Provider
      value={{
        isLogin: isLogin,
        userName: userName,
        setIsLogin: setIsLogin,
        setUserName: setUserName,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
