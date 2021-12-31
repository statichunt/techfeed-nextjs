import Link from "next/dist/client/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import { NavElement } from '../../config/Menu'
// import { AppContext } from '../AppContext'
import NavMenu from "../../content/config.json";

const DropDownMenu = ({ isOpen, toggle }) => {
  const [isDropdown, setDropDown] = useState(false);

  const { header } = NavMenu;
  const NavElement = header.navMenu;

  const handleDropdown = () => {
    toggle();
    if (isDropdown) {
      setDropDown(!isDropdown);
    }
  };

  return (
    <div
      className={
        isOpen
          ? "text-center block  border-b h-auto border-borderColor text-textColor"
          : "hidden h-0 "
      }
    >
      <header className=" flex justify-center items-center h-navBarHeight">
        <div className="text-center ">
          <h1 className="menuButton text-textColor" onClick={handleDropdown}>
            <AiOutlineClose /> Close
          </h1>
        </div>
      </header>

      <ul className="block  py-4 animate-nav-animate">
        {NavElement.map((data) => (
          <li
            key={data.menu}
            className="p-3 navItem relative"
            onClick={data.menu != "Pages" ? toggle : undefined}
          >
            <Link href={data.link}>
              <a
                className=" block"
                onClick={() => {
                  data.submenu[0].page != "" && setDropDown(!isDropdown);
                }}
              >
                {data.menu}
              </a>
            </Link>

            <ul
              className={
                data.submenu[0].page != "" && isDropdown
                  ? " block  subMenu  static bg-gray-300 w-full "
                  : "  hidden "
              }
            >
              {data.submenu[0].page != "" &&
                data.submenu.map((p) => (
                  <Link href={`/${p.pageLink}`} key={p.page}>
                    <a
                      className="text-black  "
                      onClick={handleDropdown}
                      key={p.page}
                    >
                      <li
                        key={p.page}
                        className="rounded-sm  hover:bg-gray-100 px-2 py-1 capitalize"
                      >
                        {p.page}
                      </li>
                    </a>
                  </Link>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;
