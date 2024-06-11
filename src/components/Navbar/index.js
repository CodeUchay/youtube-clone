import { useContext } from "react";
import { useNavigate } from "react-router";

import "./index.css";
import {
  CreateVideoIcon,
  MenuButton,
  MicrophoneIcon,
  YoutubeIcon,
  NotificationIcon,
  ProfileIcon,
} from "./icons";
import SearchBar from "./SearchBar";
import { CollapseContext } from "../LayoutBase";
import { getRootURL } from "../../routes";

const Navbar = () => {
  const [collapse, setCollapse] = useContext(CollapseContext);
  const navigate = useNavigate();

  return (
    <nav className="flex flex-row justify-between items-center px-1.5 fixed w-full z-10 bg-white">
      <div className="flex items-center my-3">
        <button className="nav-icon" onClick={() => setCollapse(!collapse)}>
          <MenuButton  />
        </button>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate(getRootURL())}
        >
          <YoutubeIcon />
          <span className="text-gray-500 text-xs mb-4">FR</span>
        </div>
      </div>
      <div className="lg:w-[650px] md:w-[400] flex justify-end items-center">
        <SearchBar />
        <div className="nav-icon bg-neutral-100 ">
          <MicrophoneIcon />
        </div>
      </div>
      <div className="flex">
        <button className="nav-icon">
          <CreateVideoIcon />
        </button>
        <button className="nav-icon">
          <NotificationIcon />
        </button>
        <button className="nav-icon">
          <img
            class="w-8 h-8 rounded-full"
            src="https://www.uchay.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.e221eedc.jpg&w=1920&q=75"
            alt="user photo"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
