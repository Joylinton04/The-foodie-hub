import Header from "@/components/Header";
import { Phone, Send } from "lucide-react";
import location from "../assets/location.svg";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const formSchema = z.object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    subject: z
      .string()
      .min(3, { message: "Subject must be at least 3 characters." }),
    phone: z
      .string()
      .regex(/^\+?\d{10,15}$/, { message: "Invalid phone number." }),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  function handleSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form Data:", data);
  }

  return (
    <div>
      <Header title="Contact Us" />
      {/* section 1 */}
      <div className="mt-20 flex justify-center items-center">
        <div className="wid xl:max-w-[1124px] flex gap-[2rem] ssm:flex-wrap ssm:flex-col-reverse">
          <div className="bg-[#FFF8F5] w-[45%] p-[40px] flex flex-col gap-4 ssm:w-full">
            <div className="text-[28px] font-bold font-Heading">
              Contact Information
            </div>
            <p className="text-textSofter">
              Bring the table winwin survival strateges ensure proactive
              domination the end of the day going real times multiple
              touchpoints.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-2 items-center">
                <div className="h-10 w-10 bg-bgSoft rounded-full p-2">
                  <img
                    src={location}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="text-textSofter text-[15px]">
                  Riverside 25 , San Francisco , California
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-10 w-10 bg-bgSoft rounded-full p-2 grid place-content-center">
                  <Send className="text-white" size="18px" />
                </div>
                <p className="text-textSofter text-[15px]">
                  adujoy05@gmail.com
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-10 w-10 bg-bgSoft rounded-full p-2 grid place-content-center">
                  <Phone className="text-white" size="18px" />
                </div>
                <p className="text-textSofter text-[15px]">+233 543576794</p>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="h-10 w-10 bg-[#e1dcdb] rounded-full p-2 grid place-content-center">
                <Instagram sx={{ fontSize: "16px" }} />
              </div>
              <div className="h-10 w-10 bg-[#e1dcdb] rounded-full p-2 grid place-content-center">
                <Facebook sx={{ fontSize: "16px" }} />
              </div>
              <div className="h-10 w-10 bg-[#e1dcdb] rounded-full p-2 grid place-content-center">
                <Twitter sx={{ fontSize: "16px" }} />
              </div>
              <div className="h-10 w-10 bg-[#e1dcdb] rounded-full p-2 grid place-content-center">
                <LinkedIn sx={{ fontSize: "16px" }} />
              </div>
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-4 ssm:w-full">
            <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">
              Menu
            </div>
            <div className="text-[24px] font-bold font-Heading">
              Have a Question?
            </div>
            <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="flex gap-4 flex-wrap">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-4 basis-[48%] mdd:basis-full">
                        <FormControl>
                          <Input
                            placeholder="Name"
                            {...field}
                            className="outline-none rounded-none border-black h-[50px] w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-4 basis-[48%] mdd:basis-full">
                        <FormControl>
                          <Input
                            placeholder="Email"
                            {...field}
                            type="email w-full"
                            className="outline-none rounded-none border-black h-[50px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-4 basis-[48%] mdd:basis-full">
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            className="outline-none rounded-none border-black h-[50px] w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-4 basis-[48%] mdd:basis-full">
                        <FormControl>
                          <Input
                            placeholder="Phone"
                            {...field}
                            className="outline-none rounded-none border-black h-[50px] w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

               <div className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-4">
                        <FormControl>
                          <Textarea
                            placeholder="Message"
                            {...field}
                            className="outline-none rounded-none border-black h-[150px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Submit</Button>
               </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
