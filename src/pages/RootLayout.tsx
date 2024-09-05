import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";

const RootLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow bg-primary_active ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
