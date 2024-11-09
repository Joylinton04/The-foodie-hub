const Testimonial = () => {
  return (
    <div className="wid xl:max-w-[1124px] flex flex-col gap-1">
      <div>
        <div className="w-max border-y-2 border-highl uppercase px-1 py-[0.1rem] text-xs">
          Testimonials
        </div>
        <div className="flex flex-col gap-[0.1rem]">
          <p className="font-bold text-[28px] font-Heading">What our clients say</p>
          <p className="text-textSoft">We love to hear from customers, so please leave a comment or say hello in an email.</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
