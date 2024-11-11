import dani from '../../assets/daniyal.png'
import nat from '../../assets/natasha.png'
import jack from '../../assets/jack.png'


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselC = () => {
  const carouselInfo = [
    {
      img: dani,
      name: 'Joylinton',
      location: 'Kumasi, Ghana'
    },
    {
      img: nat,
      name: 'Natasha D',
      location: 'Miami, Florida'
    },
    {
      img: jack,
      name: 'Daniel Envelope',
      location: 'San Diego, California'
    },
    {
      img: dani,
      name: 'Aristo',
      location: 'Kumasi, Ghana'
    },
    {
      img: nat,
      name: 'Akua',
      location: 'Miami, Florida'
    },
    {
      img: jack,
      name: 'Maisie',
      location: 'San Diego, California'
    },
  ]
  
  return (
    <div className="flex justify-center items-center w-full mt-4 ">
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full py-2"
      >
        <CarouselContent className="h-[220px] gap-6">
          {carouselInfo.map(car => (
          <CarouselItem className="basis-[33%] ssm:basis-[100%] bg-bgSofter h-full p-[30px] mdd:p-[20px] xl:overflow-auto" key={car.name}>
            <div className="flex gap-2 border-b border-gray-500 pb-4">
              <img className="w-12 h-12 rounded-full bg-slate-500 object-cover object-center" src={car.img}/>
              <div className="flex flex-col gap-1">
                <h1 className="font-Heading font-bold text-[18px]">{car.name}</h1>
                <p className="text-highlight text-xs">{car.location}</p>
              </div>
            </div>
            <div className="pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sapiente iste voluptate quae inventore?</div>
          </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className='text-black lgg:absolute -right-[25px] mdd:-right-[20px] mdd:bg-transparent mdd:text-highlight ssm:hidden'/>
        <CarouselPrevious className='text-black lgg:absolute -left-[25px] mdd:-left-[20px] mdd:bg-transparent mdd:text-highlight ssm:hidden'/>
      </Carousel>
    </div>
  </div>
  )
}

export default CarouselC;
