import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Header from "../pages/common/header/Header";
import Footer from "../pages/common/footer/Footer";

export default function MainLayout() {
  return (
    <>
      <div className="main-header">
        <Header />
      </div>
      <div className="main-body">
        <Outlet />
      </div>
      <div className="main-footer">
        <Footer />
      </div>
    </>
  );
}
