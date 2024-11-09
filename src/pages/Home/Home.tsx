import Header from "./Header";
import location from "../../assets/location.svg";
import time from "../../assets/time.svg";
import reserve from "../../assets/reserver.svg";
import storyImg from "../../assets/storyimage.png";
import sig from "../../assets/signature.png";
import spec from "../../assets/special-food.png";
import tomato from "../../assets/tomato-bruschetta.png";
import frenchOnion from "../../assets/french-onion.png";
import spicy from "../../assets/spicy-vegan.png";
import marrkesh from "../../assets/marrkesh.png";
import roastBeef from "../../assets/roast-beef.png";
import apple from "../../assets/apple-pie.jpg";
import lemon from "../../assets/lemon-meringue.png";
import chickenB from "../../assets/chicken-burger.png";
import chickenP from "../../assets/chicken-pizza.png";
import { Button } from "@/components/ui/button";
import Testimonial from "./Testimonial";

const Home = () => {
  const info = [
    {
      title: "Locate Us",
      img: location,
      desc: "Riverside 25, San Francisco, California",
    },
    {
      title: "Open hours",
      img: time,
      desc: "Mon To Fri 9:00 AM - 9:00 PM",
    },
    {
      title: "Reservation",
      img: reserve,
      desc: "adujoy05@gmail.com",
    },
  ];

  const specialOffers = [
    {
      title: "Starters",
      items: [
        {
          title: "Tomato Bruschetta",
          img: tomato,
          desc: "Candied Jerusalem artichokes, truffle",
          price: "$15.00",
        },
        {
          title: "French Onion Soup",
          img: frenchOnion,
          desc: "Candied Jerusalem artichokes, truffle",
          price: "$32.00",
        },
      ],
    },
    {
      title: "Main Dishes",
      items: [
        {
          title: "Spicy Vegan Potato Curry",
          img: spicy,
          desc: "Candied Jerusalem dummy texts",
          price: "$35.00",
        },
        {
          title: "Marrkesh Vegetetarian Curruy",
          img: marrkesh,
          desc: "Candied Jerusalem artichokes, truffle",
          price: "$25.00",
        },
        {
          title: "Roast Beef with Vegetable",
          img: roastBeef,
          desc: "Candied Jerusalem artichokes, truffle",
          price: "$40.00",
        },
      ],
    },
    {
      title: "desserts",
      items: [
        {
          title: "Lemon Meringue Pie",
          img: lemon,
          desc: "Candied Jerusalem dummy texts",
          price: "$15.00",
        },
        {
          title: "Apple Pie with Cream 3",
          img: apple,
          desc: "Candied Jerusalem artichokes, truffle",
          price: "$30.00",
        },
      ],
    },
  ];

  return (
    <div className="h-full">
      <div className="h-[350px] bg-bgSoft">
        <Header />
      </div>
      {/* section 2 */}
      <div className="bg-[#fff8f5] py-[90px] flex justify-center items-center">
        <div className="wid xl:max-w-[1124px]">
          <div className="flex justify-between items-center">
            {info.map((item) => (
              <div className="flex gap-2 items-center">
                <div className="h-8 w-8 bg-bgSoft rounded-full p-1">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="font-bold">{item.title}</div>
                  <div className="font-normal text-[13px] font-Heading">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex ">
            <div className="w-full md:w-[calc(50% - 30px)] h-[300px] sm:h-[300px] border-r border-gray-300">
              <img
                src={storyImg}
                className="w-[95%] h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-4 pl-6">
              <div className="flex flex-col">
                <h1 className="font-bold">The Story</h1>
                <p className="text-textSofter text-[14px]">
                  Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using 'Content here, content
                  gfshere', makinlook like readable English. Many desktop
                  publishing packages.
                </p>
              </div>
              <div className="flex gap-8">
                <div>
                  <h1 className="font-bold">2000</h1>
                  <p className="text-textSofter text-[14px]">
                    Lorem Ipsum is that it has a more-or-less normal
                    distribution
                  </p>
                </div>
                <div>
                  <h1 className="font-bold">2024</h1>
                  <p className="text-textSofter text-[14px]">
                    Lorem Ipsum is that it has a more-or-less normal
                    distribution
                  </p>
                </div>
              </div>
              <div>
                <h1 className="uppercase text-[14px]">Josefine</h1>
                <img src={sig} className="w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="flex justify-center items-center py-[60px]">
        <div className="wid xl:max-w-[1124px]">
          <div className="flex gap-[8rem]">
            <div className="flex flex-col gap-1 w-[25%]">
              <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">
                Menu
              </div>
              <div className="flex flex-col">
                <h1 className="text-[26px] font-bold font-Heading">
                  Try Our Special Offers
                </h1>
                <p className="text-textSofter text-[14px]">
                  Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using 'Content here, content making
                  it look like readable English.
                </p>
              </div>
              <div className="h-[400px] my-[20px]">
                <img
                  src={spec}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <Button className="bg-transparent w-max text-highl border border-highl capitalize px-4 py-2 text-sm hover:scale-105 duration-500 rounded-none">
                See all dishes
              </Button>
            </div>

            <div className="flex flex-col gap-5">
              {specialOffers.map((offer) => (
                <div className="flex flex-col gap-4">
                  <h1 className="text-[24px] font-bold font-Heading">
                    {offer.title}
                  </h1>
                  {offer.items.map((item) => (
                    <div className="flex justify-between items-center gap-28">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.img}
                          className="w-12 h-12 rounded-full object-cover object-center bg-bgSoft"
                        />
                        <div className="flex flex-col ">
                          <h2 className="font-Heading font-bold text-[18px]">
                            {item.title}
                          </h2>
                          <p className="text-xs text-textSofter">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-end">
                        <p className="text-gray-300">
                          ------------------------------------------
                        </p>
                        <h2 className="font-Heading font-bold text-lg">{item.price}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-bgSoft text-white flex justify-center items-center py-[60px]">
          <Testimonial/>
      </div>

      {/* section 5 */}

      <div className="flex justify-center items-center py-[60px]">
        <div className="wid xl:max-w-[1124px] lg:max-w-[1024px] flex justify-center">
            <div className="flex flex-col items-center gap-1">
              <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">
                Offer
              </div>
              <div className="font-Heading font-bold text-[20px]">Our special Offer dishes</div>
              <p className="text-xs w-[40%] text-center">Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.</p>
            <div className="flex gap-4 mt-6">
              <div><img src={chickenB} className="h-[300px] w-full object-cover object-center"/></div>
              <div><img src={chickenP} className="h-[300px] w-full object-cover object-center"/></div>
            </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
