import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Menu = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-sky-600 wid">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="h-[200px]">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#343942] h-full p-[30px]">1</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#343942] h-full p-[30px]">2</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#343942] h-full p-[30px]">3</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#343942] h-full p-[30px]">4</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#343942] h-full p-[30px]">5</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#343942] h-full p-[30px]">6</CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </div>
  );
};

export default Menu;
