"use client"
import { linksNav } from "@/utils/linksNav";

import { Link as ScrollLink } from "react-scroll";

interface Props {
  containerStyles: string;
}

const Nav = ({ containerStyles }: Props) => {
  return (
    <div className="gap-24 items-center justify-center">
      <nav className={`${containerStyles}`}>
        {linksNav.map((link, index) => {
          return (
            <ScrollLink
              offset={link.offset}
              to={link.target}
              smooth
              spy
              activeClass="active"
              key={index}
              className="cursor-pointer hover:text-blueColor-buttonColor transition-all text-center max-w-[100px] text-[0.875rem] font-poppins font-medium leading-5"
            >
              {link.name}
            </ScrollLink>
          )
        })}
      </nav>
    </div>
  )
}

export default Nav