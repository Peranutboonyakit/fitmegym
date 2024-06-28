"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Navbar from "./Navbar";
import { linksData } from "../constants/constants";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full h-[100px] bg-primary-200 lg:bg-black transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* mobile */}
        <Link href="">
          <Image
            src={"/images/logo-gym.png"}
            width={55}
            height={55}
            alt="logo"
            className="rounded-full"
          />
        </Link>
        <div
          className={`${headerActive ? "top-[90px]" : "top-[124px]"} ${
            open
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          } xl:hidden text-white flex flex-col text-center gap-9 fixed 
        top-[124px] left-0 bg-primary-200 w-full text-base uppercase font-medium
        transition-all`}
        >
          {linksData.map((link, i) => (
            <ScrollLink
              offset={link.offset}
              to={link.path}
              smooth
              spy
              activeClass="active"
              key={i}
              className="cursor-pointer hover:text-accent transition duration-300"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>

        {/* desktop */}
        <Navbar containerStyles="py-12 gap-4 hidden xl:flex text-white text-base uppercase font-medium transition-all" />

        <div className="flex items-center gap-4">
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-base font-medium">
              Signin
            </button>
            <button className="hover:text-accent transition-all text-base font-medium">
              Signup
            </button>
          </div>
          <button
            className="text-white xl:hidden hover:text-accent transition-all"
            onClick={() => setOpen(!open)}
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
