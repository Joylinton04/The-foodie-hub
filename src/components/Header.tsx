interface HeaderProps {
    title: string;
  }


const Header = ({title}:HeaderProps) => {
  return (
    <div className="flex justify-center items-center bg-bgSoft h-[150px] text-white">
      <div className="wid xl:max-w-[1124px] flex justify-center items-center">
        <div className="w-max border-y-2 border-highl capitalize px-1 text-[24px] font-bold font-Heading">
            {title}
        </div>
      </div>
    </div>
  )
}

export default Header;
