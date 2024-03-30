import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UserLayout from "../layout/UserLayout";
import PreOrder from "../pages/content/preorder/PreOrder";
import NandE from "../pages/content/nande/NandE";
import Home from "../pages/content/home/Home";
import SignUp from "../pages/content/login/SignUp";
import LoginHandler from "../pages/content/login/LoginHandler";
import MyPageHandler from "../pages/content/mypage/MyPageHandler";
import ShopLayout from "../layout/ShopLayout";
import Profile from "../pages/content/profile/Profile";
import DetailPage from "../pages/content/buyDetail/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "preorder",
        element: <PreOrder />,
      },
      {
        path: "nande",
        element: <NandE />,
      },
      {
        path: "mypage",
        element: <MyPageHandler />,
      },
      {
        path: "shop/:pageId",
        element: <ShopLayout />,
      },
      {
        path: "shop/buyPage/:pageId",
        element: <DetailPage />,
      },
      {
        path: "detail/:profileId",
        element: <Profile />,
      },
    ],
  },
  {
    path: "user/",
    element: <UserLayout />,
    children: [
      {
        path: "login",
        element: <LoginHandler />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
