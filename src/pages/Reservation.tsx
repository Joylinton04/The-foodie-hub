import React from "react";
import Header from "@/components/Header";
import reserved from "../assets/reservation/reserved-img.jpg";
import wcu from "../assets/reservation/why-choose-us.png";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {format} from 'date-fns'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { ControllerRenderProps, FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Reservation = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const form = useForm();

  return (
    <div>
      <Header title="Booking page" />

      {/* Section 1 */}
      <div className="flex justify-center items-center">
        <div className="wid xl:max-w-[1124px] mt-20 flex">
          <div className="flex w-full justify-between mdd:flex-wrap mdd:flex-col mdd:gap-4">
            <div className="w-[50%] h-auto flex flex-col gap-4 mdd:w-[100%]">
              <div className="flex flex-col gap-1">
                <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">
                  Reservation
                </div>
                <h1 className="font-Heading font-bold text-[40px]">
                  Book your table now
                </h1>
                <p className="text-textSofter">
                  The people, food and the prime locations make Rodich the
                  perfect place good friends & family to come together and have
                  great time.
                </p>
              </div>
              <form className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <Input
                  className="outline-none rounded-none basis-[48%] ssm:basis-full h-[50px] border-black"
                  placeholder="Name"
                  required
                />
                <Input
                  className="outline-none rounded-none basis-[48%] ssm:basis-full h-[50px] border-black"
                  placeholder="Email"
                  required
                />
                <Input
                  className="outline-none rounded-none basis-[48%] ssm:basis-full h-[50px] border-black"
                  placeholder="Phone"
                  required
                  type="number"
                />
                {/* <Input className='outline-none rounded-none basis-[48%] ssm:basis-full h-[50px] border-black' placeholder='' type='date' /> */}
                <FormField
                  control={form.control}
                  name="date"
                  render={({field}:any) => (
                    <FormItem className="basis-[48%] ssm:basis-full">
                        <Popover>
                        <PopoverTrigger asChild>
                            <Button
                            variant={"outline"}
                            className="h-[50px] border-black w-full rounded-none"
                            >
                                {field.value ? (
                            format(field.value, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                             mode="single"
                             selected={field.value}
                             onSelect={field.onChange}
                             disabled={(date) =>
                               date > new Date() || date < new Date("1900-01-01")
                             }
                             initialFocus
                            />
                        </PopoverContent>
                        </Popover>
                    </FormItem>
                  )}
                />

                <Input
                  className="outline-none rounded-none basis-[48%] ssm:basis-full h-[50px] border-black"
                  type='time'
                  required
                />
                <Input
                  className="outline-none rounded-none basis-[48%] ssm:basis-full h-[50px] border-black"
                  placeholder="type"
                  required
                />
              </div>
              <Button className="bg-transparent w-max text-highl border border-highl capitalize px-4 py-2 text-sm hover:scale-105 duration-500 rounded-none" type="submit">
                Book a table
              </Button>
              </form>


            </div>
            <div className="w-[40%] mdd:w-[100%]">
              <img
                src={reserved}
                className="w-full h-[450px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

    {/* section 2 */}
    <div className="flex justify-center items-center">
        <div className="wid xl:max-w-[1124px] mt-20 flex justify-between gap-4 items-center mdd:flex-wrap mdd:flex-col-reverse">
            <div className="w-[40%] mdd:w-[100%]">
                <img src={wcu} className="w-full h-[400px] object-cover object-center"/>
            </div>
            <div className="w-[50%] flex flex-col gap-1 mdd:w-[100%] mdd:items-center">
                <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">
                  why choose us
                </div>
                <h1 className="font-Heading font-bold text-[40px]">Why We Are The Best?</h1>
                <p className="text-textSofter mdd:text-center">Bring the table winwin survival strateges ensure proactive the domination the end of the day going forward new normal that has evolved froms generation on the runway heading towards streamlined cloud solution generated content in real times will have multiple touchpoints.</p>
            </div>
        </div>
    </div>

    </div>
  );
};

export default Reservation;
