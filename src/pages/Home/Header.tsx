import { Button } from "@/components/ui/button";
import hero from "../../assets/hero.png";

const Header = () => {
  return (
    <div className="h-full flex items-center justify-center py-5">
      <div className="text-white flex justify-between gap-2 items-center w-[75%] xl:max-w-[1124px]">
        <div className="flex flex-col gap-2 w-[50%]">
          <div className="text-6xl font-light font-Heading">
            Welcome to the Foodie hub
          </div>
          <p className="text-textSoft">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy .
          </p>
          <Button className="w-max text-highl bg-transparent border border-highlight capitalize px-4 py-2 text-sm hover:scale-105 duration-500 rounded-none">
            View Menu
          </Button>
        </div>
        <div className="w-[250px] sm:w-[410px] mt-24 h-full">{/* sm:mt-[55px] */}
          <img
            src={hero}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
