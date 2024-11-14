import gall1 from "../assets/about/gallery_img1.png";
import gall2 from "../assets/about/gallery_2.png";
import gall3 from "../assets/about/gallery_image3.png";
import gall4 from "../assets/about/gallery_img4.png";
import gall5 from "../assets/about/gallery_img5.png";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center py-[40px]">
        <div className="wid xl:max-w-[1124px] flex flex-col gap-6 ssm:gap-x-0">
          <div className="flex justify-center items-center flex-col">
            <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">
              gallery
            </div>
            <div className="font-Heading font-bold text-[20px]">
              What We Make
            </div>
          </div>
          <div className="gridlayout ssm:grid-cols-2 ssm:gap-2">
            <div className="w-full min-h-[180px] ssm:col-span-2">
              <img
                src={gall1}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full min-h-[180px] row-span-2 col-span-2 ssm:row-span-1 ssm:col-span-1">
              <img
                src={gall2}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full min-h-[180px]">
              <img
                src={gall3}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full min-h-[180px]">
              <img
                src={gall4}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full min-h-[180px]">
              <img
                src={gall5}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Gallery;
