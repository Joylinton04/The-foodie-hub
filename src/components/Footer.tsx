import logo from "../assets/logo.svg";
import { Button } from "./ui/button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="flex justify-center gap-14 flex-col items-center pt-[100px] pb-6 bg-[#1f242c] mt-10 text-white">
      <div className="wid flex justify-center items-center flex-col gap-6 xl:max-w-[1124px]">
        {/* Top */}
        <div className="flex justify-between items-center pad w-full">
          <Button className="bg-transparent text-white border border-highlight capitalize px-4 py-2 text-sm hover:scale-105 duration-500 rounded-none ssm:hidden">
            call +233543576794
          </Button>
          <div className="h-[90px] mdd:h-[50px] mdd:w-[100px]">
            <img
              src={logo}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex gap-1 text-white cursor-pointer">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>

        <div className="flex justify-between items-center pad w-full relative ssm:pb-20">
          <div className="flex flex-col gap-1">
            <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs mb-4">
              contact
            </div>
            <p>5 Rue Dalou, 75015 Paris</p>
            <p className="text-highl">adujoy05@gmail.com</p>
          </div>
          <div className="flex items-center flex-col gap-1 ssm:absolute ssm:left-1/2 ssm:-translate-x-[50%] ssm:top-[120px]">
            <p className="text-xs text-center w-[60%] ssm:w-[95%]">
              Join our mailing list for updates, Get news & offers events.
            </p>
            <div className="flex w-full max-w-sm items-center mt-2">
              <Input 
                type="email" 
                placeholder="Email" 
                className="text-black outline-0 bg-transparent rounded-none border border-white w-[300px] mdd:w-[200px] ssm:max-w-[300px]"/>
              <Button type="submit" className="rounded-none bg-white text-black">Subscribe</Button>
            </div>
          </div>
          <div>
            <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs mb-4">
              working hours
            </div>
            <ul className="text-[10px]">
                <li><span className="text-highl">Mon - Fri: </span>7.00am - 6.00pm</li>
                <li><span className="text-highl">Sat: </span>8.30am - 5.00pm</li>
                <li><span className="text-highl">Sun: </span>10.00am - 4.00pm</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 m w-full flex justify-center items-center pt-4">
      <div className="wid flex justify-between gap-6 xl:max-w-[1124px] ssm:flex-wrap ssm:gap-4 ssm:items-center ssm:justify-center">
            <p className="text-xs">© Copyright - <span className="text-highl">the foodie hub</span> | Designed by <span className="text-highl">...</span> Templates - Powered by <span className="text-highl">...</span></p>
            <p className="text-xs">Styleguide / Licenses</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
