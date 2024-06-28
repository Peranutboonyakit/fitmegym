"use client";
import { Link as ScrollLink } from "react-scroll";
import { linksData } from "../constants/constants";

const Navbar = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <div className={`${containerStyles}`}>
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
  );
};

export default Navbar;
