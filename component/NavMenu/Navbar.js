import Link from "next/dist/client/link";
import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import NavMenu from "../../content/config.json";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar({ toggle, isOpen }) {
  const { header } = NavMenu;
  const NavElement = header.navMenu;

  return (
    <div className={isOpen ? "hidden" : "block"}>
      <nav className="nav">
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
                      : "w-2 rounded-full h-h1 bg-secoundary-color"
                  }
                ></div>

                <li className="group relative ">
                  <Link href={`${data.link}`}>
                    <a className="navItem relative flex w-full">
                      {data.menu}
                      <i
                        className={
                          data.menu == "Pages"
                            ? "block text-headingColor text-2xl"
                            : "hidden"
                        }
                      >
                        <RiArrowDropDownLine />
                      </i>
                    </a>
                  </Link>
                  {/* dropDown */}
                  <ul
                    className={
                      data.submenu[0].page != ""
                        ? "  hidden group-hover:block subMenu"
                        : "hidden"
                    }
                  >
                    {data.submenu[0].page != "" &&
                      data.submenu.map((p) => (
                        <Link href={`/${p.pagelink}`} key={p.page}>
                          <a className="text-black  ">
                            <li
                              className="rounded-sm 
                     hover:bg-gray-300 px-2 py-1 capitalize"
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
}

export default Navbar;

// get all datta from .mdx file
