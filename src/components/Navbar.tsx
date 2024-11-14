import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const nav = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Menu",
      to: "/menu",
    },
    {
      label: "Reservation",
      to: "/reservation",
    },
    {
      label: "Blog",
      to: "/blog",
    },
    {
      label: "Gallery",
      to: "/gallery",
    },
    {
      label: "Contact",
      to: "/contact",
    },
  ];

  return (
    <div className="bg-bgSoft w-full pt-[1.2rem]">
      <div className="w-full flex justify-center items-center">
        {/* Top */}
        <div className="flex justify-between items-center pad wid xl:max-w-[1124px] mdd:justify-center ssm:justify-between">
          <Button className="bg-transparent text-white border border-highlight capitalize px-4 py-2 text-sm hover:scale-105 duration-500 rounded-none mdd:hidden">
            call +233543576794
          </Button>
          <div className="h-[90px] mdd:h-[50px] mdd:w-[100px]">
            <img
              src={logo}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <Button className="rounded-none bg-highl text-black px-4 py-2 text-sm hover:bg-highl hover:scale-105 duration-500 mdd:hidden">
            Reservation
          </Button>
          <div onClick={() => toggleMenu()} className="relative z-50 sm:hidden">
            {!menuOpen
              ?
              <MenuIcon className="text-white p-1" sx={{ fontSize: "32px" }} />
              :
              <CloseIcon className="text-highl p-1" sx={{ fontSize: "32px" }}/>
            }
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-[#1f242c] text-white fixed top-0 left-0 h-full w-[280px] sm:hidden z-40 flex flex-col justify-between">
          <ul className="flex flex-col gap-6 text-[#ccc] pad mt-[55px] text-lg">
            <li
              onClick={() => toggleMenu()}
              className="hover:underline hover:duration-300 hover:scale-110 cursor-pointer"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => toggleMenu()}
              className="hover:underline hover:duration-300 hover:scale-110 cursor-pointer"
            >
              <Link to="/about">About</Link>
            </li>
            <li
              onClick={() => toggleMenu()}
              className="hover:underline hover:duration-300 hover:scale-110 cursor-pointer"
            >
              <Link to="/menu">Menu</Link>
            </li>
            <li
              onClick={() => toggleMenu()}
              className="hover:underline hover:duration-300 hover:scale-110 cursor-pointer"
            >
              <Link to="/reservation">Reservation</Link>
            </li>
            <li
              onClick={() => toggleMenu()}
              className="hover:underline hover:duration-300 hover:scale-110 cursor-pointer"
            >
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
          <div className="flex gap-1 text-white cursor-pointer pad mb-16">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>
      )}

      {/* Nav */}
      <div className="border-y border-[#5c6168] mt-[30px] h-[50px] text-[14px] flex items-center justify-center gap-[30px] relative z-20 ssm:hidden">
        <div className="flex justify-between items-center wid xl:max-w-[1124px]">
          <div className="flex gap-[30px]">
            {nav.map((item) => (
              <NavLink
                to={item.to}
                key={item.label}
                className="text-white hover:text-highlight transition-colors duration-500"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-2 text-white cursor-pointer">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
