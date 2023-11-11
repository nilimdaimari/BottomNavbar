import { MdAddBox, MdHomeFilled, MdNotifications } from "react-icons/md";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiDotsHorizontal } from "react-icons/hi";
import "../components/BottomNav.css";

export const BottomNav = () => {
  return (
    <>
      <div id="navContainer">
        <nav id="navbar">
          <button>
            <MdHomeFilled id="tabIcons" />
            <span>Home</span>
          </button>
          <button>
            <HiOutlineMagnifyingGlass id="tabIcons" />
            <span>Search</span>
          </button>
          <button>
            <MdAddBox id="tabIcons" />
            <span>Post</span>
          </button>
          <button>
            <MdNotifications id="tabIcons" />
            <span>Notifications</span>
          </button>
          <button>
            <HiDotsHorizontal id="tabIcons" />
            <span>More</span>
          </button>
        </nav>
      </div>
    </>
  );
};
