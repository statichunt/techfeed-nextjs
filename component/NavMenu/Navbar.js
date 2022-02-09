import Link from "next/dist/client/link";
import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import NavMenu from "../../config/menu.json";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = ({ toggle, isOpen }) => {
  const { header } = NavMenu;
  const NavElement = header;
  return (
    <div className={isOpen ? "hidden" : "block"}>
      <nav className="nav text-textColor">
        <div className="md:hidden ">
          <h1 className="menuButton" onClick={toggle}>
            <CgMenuGridR /> Menu
          </h1>
        </div>
        <div className="md:block hidden">
          <ul className="flex justify-between items-center  ">
            {NavElement.map((data) => (
              <React.Fragment key={data.menu}>
                <div
                  key={data.menu}
                  className={
                    data.menu == "Home"
                      ? "hidden"
                      : "w-2 rounded-full h-1 bg-light"
                  }
                ></div>

                <li className="group relative transition duration-700 ease-in-out">
                  <Link href={`${data.link}`}>
                    <a className="navItem relative flex w-full  transition duration-700 ease-in-out">
                      {data.menu}
                      <i
                        className={
                          data.menu == "Pages"
                            ? "block text-textDark text-2xl transition duration-700 ease-in-out" 
                            : "hidden"
                        }
                      >
                        <RiArrowDropDownLine />
                      </i>
                    </a>
                  </Link>
                  {/* dropDown */}
                  <ul className={
                      data.submenu[0].page != ""
                        ? "  subMenu"
                        : "hidden"
                    }
                  >
                    {data.submenu[0].page != "" &&
                      data.submenu.map((p) => (
                        <Link href={`/${p.pagelink}`} key={p.page}>
                          <a className=" uppercase hover:text-primaryColor text-textColor hover:font-extralight z-10 ">
                            <li
                              className=" rounded-sm transition duration-700 ease-in-out
                     hover:bg-borderLight px-2 py-1 uppercase "
                            >
                              {p.page}
                            </li>
                          </a>
                        </Link>
                      ))}
                  </ul>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// get all datta from .mdx file
