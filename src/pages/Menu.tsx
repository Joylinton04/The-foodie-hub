import Header from "@/components/Header";
import tomato from "../assets/tomato-bruschetta.png";
import frenchOnion from "../assets/french-onion.png";
import spicy from "../assets/spicy-vegan.png";
import marrkesh from "../assets/marrkesh.png";
import roastBeef from "../assets/roast-beef.png";
import apple from "../assets/apple-pie.jpg";
import lemon from "../assets/lemon-meringue.png";
import starters from "../assets/about/starters.jpg"
import main from "../assets/about/main-dish.jpg"
import dessert from "../assets/about/dessert.jpg"
import Gallery from "@/components/Gallery";

const Menu = () => {
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
    <div>
      <Header title="our menu" />

      {/* section 1 */}
      <div className="flex justify-center items-center mt-20">
        <div className="wid xl:max-w-[1124px] flex gap-6">
          <div className="w-[40%] ssm:hidden">
            <img src={starters} className="w-full h-[400px] object-cover object-center"/>
          </div>
          <div className="flex flex-col gap-5 w-[60] ssm:w-full">
            {specialOffers.filter(item => item.title == "Starters").map((offer) => (
              <div className="flex flex-col gap-4" key={offer.title}>
                <h1 className="text-[24px] font-bold font-Heading">
                  {offer.title}
                </h1>
                {offer.items.map((item) => (
                  <div
                    className="flex justify-between items-center gap-28 mdd:gap-6"
                    key={item.title}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={item.img}
                        className="w-12 h-12 rounded-full object-cover object-center bg-bgSoft"
                      />
                      <div className="flex flex-col ">
                        <h2 className="font-Heading font-bold text-[18px]">
                          {item.title}
                        </h2>
                        <p className="text-xs text-textSofter">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-end mdd:gap-8">
                      <p className="text-gray-300 ssm:hidden">
                        -------------
                        <span className="lgg:hidden">
                          -------------------------
                        </span>
                      </p>
                      <h2 className="font-Heading font-bold text-lg">
                        {item.price}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="flex justify-center items-center mt-20">
        <div className="wid xl:max-w-[1124px] flex gap-6 flex-row-reverse">
          <div className="w-[40%] ssm:hidden">
            <img src={main} className="w-full h-[400px] object-cover object-center"/>
          </div>
          <div className="flex flex-col gap-5 w-[60] ssm:w-full">
            {specialOffers.filter(item => (item.title).toLowerCase() == "main dishes").map((offer) => (
              <div className="flex flex-col gap-4" key={offer.title}>
                <h1 className="text-[24px] font-bold font-Heading">
                  {offer.title}
                </h1>
                {offer.items.map((item) => (
                  <div
                    className="flex justify-between items-center gap-28 mdd:gap-6"
                    key={item.title}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={item.img}
                        className="w-12 h-12 rounded-full object-cover object-center bg-bgSoft"
                      />
                      <div className="flex flex-col ">
                        <h2 className="font-Heading font-bold text-[18px]">
                          {item.title}
                        </h2>
                        <p className="text-xs text-textSofter">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-end mdd:gap-8">
                      <p className="text-gray-300 ssm:hidden">
                        -----------
                        <span className="lgg:hidden">
                          -------------------------
                        </span>
                      </p>
                      <h2 className="font-Heading font-bold text-lg">
                        {item.price}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="flex justify-center items-center mt-20">
        <div className="wid xl:max-w-[1124px] flex gap-6">
          <div className="w-[40%] ssm:hidden">
            <img src={dessert} className="w-full h-[400px] object-cover object-center"/>
          </div>
          <div className="flex flex-col gap-5 w-[60] ssm:w-full">
            {specialOffers.filter(item => (item.title).toLowerCase() == "desserts").map((offer) => (
              <div className="flex flex-col gap-4" key={offer.title}>
                <h1 className="text-[24px] font-bold font-Heading">
                  {offer.title}
                </h1>
                {offer.items.map((item) => (
                  <div
                    className="flex justify-between items-center gap-28 mdd:gap-6"
                    key={item.title}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={item.img}
                        className="w-12 h-12 rounded-full object-cover object-center bg-bgSoft"
                      />
                      <div className="flex flex-col ">
                        <h2 className="font-Heading font-bold text-[18px]">
                          {item.title}
                        </h2>
                        <p className="text-xs text-textSofter">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-end mdd:gap-8">
                      <p className="text-gray-300 ssm:hidden">
                        -----------
                        <span className="lgg:hidden">
                          -------------------------
                        </span>
                      </p>
                      <h2 className="font-Heading font-bold text-lg">
                        {item.price}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Section 4 */}
      <Gallery/>

    </div>
  );
};

export default Menu;
