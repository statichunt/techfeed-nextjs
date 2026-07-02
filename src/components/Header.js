"use client";

import { useEffect, useState } from "react";
import DropDownMenu from "./NavMenu/DropDownMenu";
import Navbar from "./NavMenu/Navbar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hiddenMenu = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hiddenMenu);

    return () => {
      window.removeEventListener("resize", hiddenMenu);
    };
  }, [isOpen]);

  return (
    <div>
      <Navbar toggle={toggle} isOpen={isOpen}></Navbar>
      <DropDownMenu isOpen={isOpen} toggle={toggle}></DropDownMenu>
    </div>
  );
};
