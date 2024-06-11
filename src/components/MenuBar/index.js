import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon, ShortsIcon, SubscriptionsIcon, FavoriteIcon } from "./icons";
import MenuItem from "./MenuItem";
import { SelectedButtonContext } from "../../App";
import { getRootURL } from "../../routes";
import { FAVORITE_BUTTON, HOME_BUTTON } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHistory,
  faList,
  faVideo,
  faClock,
  faThumbsUp,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CollapseContext } from "../LayoutBase";

const MenuBar = () => {
  const [selectedButton, setSelectedButton] = useContext(SelectedButtonContext);
  const navigate = useNavigate();
  const [collapse] = useContext(CollapseContext);

  const handelClickOnButton = (button) => {
    setSelectedButton(button);
    navigate(getRootURL());
  };

  return (
    <div className="p-2 mt-14 bg-white divide-y h-screen fixed">
      <div className="my-2">
        <div onClick={() => handelClickOnButton(HOME_BUTTON)}>
          <MenuItem
            icon={<HomeIcon selected={selectedButton === HOME_BUTTON} />}
            title={HOME_BUTTON}
            selected={selectedButton === HOME_BUTTON}
          />
        </div>
        <MenuItem icon={<ShortsIcon />} title="Shorts" />
        <MenuItem icon={<SubscriptionsIcon />} title="Subscriptions" />
      </div>
      <div className="ml-1">
        <h2 className="text-lg font-semibold mt-2 rounded-lg px-2 py-1 hover:bg-neutral-100 cursor-pointer ">
          You
          <FontAwesomeIcon icon={faChevronRight} className="text-xs mb-[2px]" />{" "}
        </h2>
        <MenuItem
          icon={<FontAwesomeIcon icon={faUser} />}
          title="Your channel"
        />
        <MenuItem icon={<FontAwesomeIcon icon={faHistory} />} title="History" />
        <MenuItem icon={<FontAwesomeIcon icon={faList} />} title="Playlists" />
        <MenuItem
          icon={<FontAwesomeIcon icon={faVideo} />}
          title="Your Videos"
        />
        <MenuItem
          icon={<FontAwesomeIcon icon={faClock} />}
          title="Watch Later"
        />
        <MenuItem
          icon={<FontAwesomeIcon icon={faThumbsUp} />}
          title="Liked videos"
        />
      </div>
      {!collapse && (
        <div className="mt-8 ml-1">
          <h2 className="text-lg font-semibold mt-2">
            Subscriptions
          </h2>
          <ul className="mt-4 space-y-4  ml-2">
            <li className="flex items-center space-x-3">
              <img
                class="w-8 h-8 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWc0FxS5DrTEoLizU8dKxnH-aArceOZLOAXA&s"
                alt="user photo"
              />
              <span className="font-sans text-[15px] leading-8 font-normal">Sia</span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                class="w-8 h-8 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDN-YMMmBIUuUkP64H-IzEKq1C6r6-op33WQ&s"
                alt="user photo"
              />
              <span className="font-sans text-[15px] leading-8 font-normal">Nicki Minaj</span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                class="w-8 h-8 rounded-full"
                src="https://media.vogue.co.uk/photos/5d54840e62be8c0008c6b707/master/pass/original"
                alt="user photo"
              />
              <span className="font-sans text-[15px] leading-8 font-normal">Rihanna</span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                class="w-8 h-8 rounded-full"
                src="https://static01.nyt.com/images/2023/02/03/arts/03grammys-walkup-bey-swap-tqfh/03grammys-walkup-bey-swap-tqfh-superJumbo.jpg"
                alt="user photo"
              />
              <span className="font-sans text-[15px] leading-8 font-normal">Beyonce</span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                class="w-8 h-8 rounded-full"
                src="https://hips.hearstapps.com/hmg-prod/images/miley-cyrus-attends-the-versace-fw23-show-at-pacific-design-news-photo-1707096564.jpg"
                alt="user photo"
              />
              <span className="font-sans text-[15px] leading-8 font-normal">Miley Cyrus</span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                class="w-8 h-8 rounded-full"
                src="https://www.billboard.com/wp-content/uploads/media/fletcher-02-press-photo-2017-billboard-1548.jpg"
                alt="user photo"
              />
              <span className="font-sans text-[15px] leading-8 font-normal">FLETCHER</span>
            </li>
            <li className="flex items-center space-x-3 ">
              <FontAwesomeIcon icon={faChevronDown} />
              <span>Show more</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
