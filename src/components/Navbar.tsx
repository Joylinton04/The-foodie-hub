import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Navbar = () => {
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
    <div className="bg-bgSoft w-full py-[1.2rem]">
      <div className="w-full flex justify-center items-center">
        {/* Top */}
        <div className="flex justify-between items-center pad w-[75%] xl:max-w-[1124px]">
          <Button className="bg-transparent text-white border border-highlight capitalize px-4 py-2 text-sm hover:scale-105 duration-500 rounded-none">
            call +233543576794
          </Button>
          <div className="h-[90px]">
            <img
              src={logo}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <Button className="rounded-none bg-highl text-black px-4 py-2 text-sm hover:bg-highl hover:scale-105 duration-500">
            Reservation
          </Button>
        </div>
      </div>
      
      {/* Nav */}
      <div className="border border-[#5c6168] mt-[30px] h-[50px] text-[14px] flex items-center justify-center gap-[30px]">
        <div className="flex justify-between items-center w-[75%] xl:max-w-[1124px]">
          <div className="flex gap-[30px]">
            {nav.map((item) => (
              <NavLink
                to={item.to}
                key={item.label}
                className="text-textSoft hover:text-highlight transition-colors duration-500"
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
/* 
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
*/
