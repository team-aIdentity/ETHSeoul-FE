import { Outlet } from "react-router-dom";
import "./UserLayout.css";

export default function UserLayout() {
  return (
    <>
      <div className="user-body">
        <Outlet />
      </div>
    </>
  );
}
