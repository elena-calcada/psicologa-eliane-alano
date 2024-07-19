"use client"
import { linksNav } from "@/utils/linksNav";
import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";
import SocialNav from "./SocialNav";

interface Props {
  containerStyles: string;
  onClickCloseNav: () => void
}

const NavMobile = ({ containerStyles, onClickCloseNav }: Props) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1279px)'
  })

  return (
    <nav className={`${containerStyles}`}>
      {linksNav.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass={`${!isMobile && 'active'}`}
            key={index}
            className="cursor-pointer"
            onClick={onClickCloseNav}
          >
            {link.name}
          </ScrollLink>
        )
      })}

      <SocialNav onClickCloseNav={onClickCloseNav} containerStyles="flex gap-8 justify-center mt-6" />
    </nav>
  )
}

export default NavMobile