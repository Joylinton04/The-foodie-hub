import Gall from "@/components/Gallery";
import Header from "@/components/Header";
import feature1 from '../assets/gallery/feature-image1.png'
import feature2 from '../assets/gallery/feature-image2.png'
import { Button } from "@/components/ui/button";

const Gallery = () => {
  return (
    <div>
        <Header title="Gallery" />
      {/* section 1 */}
      <Gall/>

      {/* section 2 */}
      <div className="flex justify-center items-center mt-20 ssm:mt-6">
        <div className="wid xl:max-w-[1124px] flex flex-col">
          <div className="flex justify-between ssm:flex-col">
            <div className="flex flex-col gap-1 w-1/2 justify-center px-6 mdd:py-6 ssm:w-full">
                <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">
                  feature
                </div>
                <div className="font-bold font-Heading text-[50px]">Always fresh ingredients</div>
                <div className="text-textSofter">The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time.</div>
                <Button className="mt-8 bg-transparent w-max text-highl border border-highl capitalize px-4   py-2 text-sm hover:scale-105 duration-500 rounded-none">
                  See all dishes
                </Button>
            </div>
            <div className="ssm:w-full w-1/2"><img src={feature1} className="w-full h-full"/></div>
          </div>
          <div className="flex justify-between flex-row-reverse ssm:flex-col">
            <div className="flex flex-col gap-1 w-1/2 justify-center px-6 mdd:py-6 ssm:w-full">
                <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">
                  feature
                </div>
                <div className="font-bold font-Heading text-[50px]">Always fresh ingredients</div>
                <div className="text-textSofter">The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time.</div>
                <Button className="mt-8 bg-transparent w-max text-highl border border-highl capitalize px-4   py-2 text-sm hover:scale-105 duration-500 rounded-none">
                  See all dishes
                </Button>
            </div>
            <div className="ssm:w-full w-1/2"><img src={feature2} className="w-full h-full"/></div>
          </div>
          {/* <div></div> */}
        </div>
      </div>
    </div>
  )
}

export default Gallery;
