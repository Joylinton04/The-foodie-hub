import Header from "@/components/Header";
import jack from "../assets/daniyal.png";
import sig from "../assets/signature.png";
import rating from "../assets/about/rating.png";
import about from "../assets/about/about_hero.png";
import counts from "../assets/about/counts-background.png";
import freshP from "../assets/about/fresh-product.svg";
import skillC from "../assets/about/skilled-chefs.svg";
import drinks from "../assets/about/drinks-juices.svg";
import vegan from "../assets/about/vegan-cuisine.svg";
import akua from "../assets/about/avroko_chef.png";
import aristo from "../assets/about/Aristo.jpg";
import adu from "../assets/about/Adu Atakora.jpg";
import gall1 from "../assets/about/gallery_img1.png";
import gall2 from "../assets/about/gallery_2.png";
import gall3 from "../assets/about/gallery_image3.png";
import gall4 from "../assets/about/gallery_img4.png";
import gall5 from "../assets/about/gallery_img5.png";
import andy from "../assets/about/Andy.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Testimonial from "./Home/Testimonial";

const About = () => {
  return (
    <div>
      <Header title="About us" />
      {/* section 1 */}
      <div className="flex justify-center items-center py-[80px]">
        <div className="wid xl:max-w-[1124px] flex justify-between gap-6 ssm:flex-col-reverse ssm:items-center">
          <div className="flex flex-col gap-1 w-[55%] ssm:w-[100%] ssm:mt-8">
            <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">
              About us
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-Heading text-[18px] font-bold">
                Quality and Tradition
              </div>
              <div className="text-sm text-textSofter">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content gfshere
                making look like readable English. Many desktop publishing
                packages.
              </div>
            </div>
            <div className="mt-6">
              <h1 className="uppercase text-[14px]">Josefine</h1>
              <img src={sig} className="w-20" />
            </div>
            <Button className="mt-6 bg-transparent w-max text-highl border border-highl capitalize px-6 py-1 text-sm hover:scale-105 duration-500 rounded-none">
              See More
            </Button>
          </div>
          <div className="relative ssm:-mt-12">
            <div className="relative -z-10">
              <img src={about} className="w-[calc(50% - 30px)] h-[300px]" />
            </div>
            <div className="w-[300px] h-[200px] p-8 shadow-lg absolute z-50 -left-[220px] top-[45%] bg-white ssm:hidden">
              <div className="flex gap-2 pb-4">
                <img
                  className="w-12 h-12 rounded-full bg-slate-500 object-cover object-center"
                  src={jack}
                />
                <div className="flex flex-col">
                  <h1 className="font-Heading font-bold">Adu Atakora</h1>
                  <p className="text-xs text-textSofter">CEO & Founder</p>
                </div>
              </div>
              <div className="text-xs">
                Capitalize on low hanging fruit to identify a ballpark
              </div>
              <div className="flex pt-4 gap-1">
                <img src={rating} />
                <img src={rating} />
                <img src={rating} />
                <img src={rating} />
                <img src={rating} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div
        className="h-[300px] w-full bg-cover bg-no-repeat bg-center text-white ssm:h-full"
        style={{ backgroundImage: `url(${counts})` }}
      >
        <div className="flex justify-center items-center py-[45px]">
          <div className="flex xl:max-w-[1124px] ssm:flex-wrap">
            <div className="flex items-center basis-1/2 py-[15px] border-r-2 border-[#d5d5d5]">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center">
                  <img
                    src={freshP}
                    className="w-[50px] h-[50px] object-cover"
                  />
                  <p className="font-Heading font-bold text-[18px]">
                    Fresh Product
                  </p>
                </div>
                <div className="text-xs text-textSoft text-center">
                  Professional consider everyone probls small niche friendly.
                </div>
                <Link to="/dishes" className="font-semibold text-sm text-highl">
                  See more
                </Link>
              </div>
            </div>
            <div className="flex items-center basis-1/2 py-[15px] border-r-2 border-[#d5d5d5] ssm:border-r-0">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center">
                  <img
                    src={skillC}
                    className="w-[50px] h-[50px] object-cover"
                  />
                  <p className="font-Heading font-bold text-[18px]">
                    Skilled Chefs
                  </p>
                </div>
                <div className="text-xs text-textSoft text-center">
                  Professional consider everyone probls small niche friendly.
                </div>
                <Link to="/dishes" className="font-semibold text-sm text-highl">
                  See more
                </Link>
              </div>
            </div>
            <div className="flex items-center basis-1/2 py-[15px] border-r-2 border-[#d5d5d5] ssm:border-t-2">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center">
                  <img
                    src={drinks}
                    className="w-[50px] h-[50px] object-cover"
                  />
                  <p className="font-Heading font-bold text-[18px]">
                    Drinks & Juices
                  </p>
                </div>
                <div className="text-xs text-textSoft text-center">
                  Professional consider everyone probls small niche friendly.
                </div>
                <Link to="/dishes" className="font-semibold text-sm text-highl">
                  See more
                </Link>
              </div>
            </div>
            <div className="flex items-center basis-1/2 py-[15px] border-r-2 border-[#d5d5d5] ssm:border-r-0 ssm:border-t-2">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center">
                  <img src={vegan} className="w-[50px] h-[50px] object-cover" />
                  <p className="font-Heading font-bold text-[18px]">
                    Vegan Cuisine
                  </p>
                </div>
                <div className="text-xs text-textSoft text-center">
                  Professional consider everyone probls small niche friendly.
                </div>
                <Link to="/dishes" className="font-semibold text-sm text-highl">
                  See more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <div className="flex justify-center items-center py-[80px]">
        <div className="wid xl:max-w-[1124px] flex flex-col gap-6">
          <div className="flex justify-center items-center flex-col">
            <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">Team</div>
            <div className="font-Heading font-bold text-[20px]">Meet Our Professional Chefs</div>
          </div>

          <div className="flex gap-4 justify-center ssm:flex-wrap">
            <div className="flex flex-col">
              <div><img src={akua} className="w-[200px]"/></div>
              <div className="text-center">
                <h1 className="font-bold font-Heading text-[18px]">Akua</h1>
                <p className="text-xs">Chef</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div><img src={andy} className="w-[200px]"/></div>
              <div className="text-center">
                <h1 className="font-bold font-Heading text-[18px]">Andy</h1>
                <p className="text-xs">Chef</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div><img src={aristo} className="w-[200px]"/></div>
              <div className="text-center">
                <h1 className="font-bold font-Heading text-[18px]">Aristo</h1>
                <p className="text-xs">Senior chef</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div><img src={adu} className="w-[200px]"/></div>
              <div className="text-center">
                <h1 className="font-bold font-Heading text-[18px]">Adu Atakora</h1>
                <p className="text-xs">Senior chef</p>
              </div>
            </div>

        </div>
        </div>
      </div>

    {/* Section 4 */}
    <div className="bg-bgSoft text-white flex justify-center items-center py-[60px]">
        <Testimonial />
    </div>

    {/* section 5 */}
    <div className="flex justify-center items-center py-[40px]">
      <div className="wid xl:max-w-[1124px] flex flex-col gap-6 ssm:gap-x-0">
          <div className="flex justify-center items-center flex-col">
            <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">gallery</div>
            <div className="font-Heading font-bold text-[20px]">What We Make</div>
          </div>
          <div className="gridlayout ssm:grid-cols-2 ssm:gap-2">
            <div className="w-full min-h-[180px] ssm:col-span-2"><img src={gall1} className="w-full h-full object-cover object-center"/></div>
            <div className="w-full min-h-[180px] row-span-2 col-span-2 ssm:row-span-1 ssm:col-span-1"><img src={gall2} className="w-full h-full object-cover object-center"/></div>
            <div className="w-full min-h-[180px]"><img src={gall3} className="w-full h-full object-cover object-center"/></div>
            <div className="w-full min-h-[180px]"><img src={gall4} className="w-full h-full object-cover object-center"/></div>
            <div className="w-full min-h-[180px]"><img src={gall5} className="w-full h-full object-cover object-center"/></div>
          </div>
      </div>

    </div>

    </div>
  );
};

export default About;
