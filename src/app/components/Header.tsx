"use client";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Mobilenav from "./Mobilenav";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

function Header() {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  return (
    <header
      className={` ${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed w-full bg-primary-200 h-[100px]
    transition-all z-50 uppercase font-medium font-roboto
   `}
    >
      <div className="container h-full  mx-auto flex items-center justify-between">
        <Link href={""} >
          <Image
            src="/logo.png"
            width={117}
            height={50}
            alt="Logo"
            className=""
          ></Image>
        </Link>
        <Mobilenav
          containerStyles={` ${headerActive ? "top-[90px]" : "top-[124px]"}
        ${
          openNav
            ? "max-h-max pt-8 pb-0 border-t border-white/10"
            : "max-h-0 pt-0 pb-0 overflow-hidden border-white/8"
        }
         flex flex-col text-center gap-8 
        w-full left-0 fixed bg-primary-200 text-base  text-white lg:hidden`}
        />
        <Nav containerStyles="text-white py-12 flex gap-8 hidden lg:flex " />
        <div>
          <button
            className="text-white lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
