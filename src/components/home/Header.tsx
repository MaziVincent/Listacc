import { FiMenu, FiX } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { PiSuitcaseSimpleThin } from "react-icons/pi";
// import { BsClipboardData } from "react-icons/bs";
// import { TbPeace } from "react-icons/tb";
// import { BsBarChartLine } from "react-icons/bs";
// import { BsSendCheck } from "react-icons/bs";
// import { BsGlobe2 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {  
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const desktopnav = (
    <div className="">
      <nav className={`flex flex-row justify-evenly`}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/"} className="" onClick={toggleDropDown}>
          <div className="flex flex-row justify-between services">Services</div>
          {/* <div
            className={`flex flex-col bg-dropdown mx-[-20px] p-[20px] space-y-[20px] text-lg text-white servicesDropDown`}
          >
            <Link
              to={"/"}
              className="flex align-middle border-b-[1px] border-[#ffffff] border-opacity-30 p-[10px]"
            >
              <PiSuitcaseSimpleThin className="text-[30px] pr-[10px]" />
              Business Planning
            </Link>
            <Link
              to={"/"}
              className="flex align-middle border-b-[1px] border-[#ffffff] border-opacity-30 p-[10px]"
            >
              <BsClipboardData className="text-[30px] pr-[10px]" />
              Business Research
            </Link>
            <Link
              to={"/"}
              className="flex align-middle border-b-[1px] border-[#ffffff] border-opacity-30 p-[10px]"
            >
              <TbPeace className="text-[30px] pr-[10px]" />
              Tracking operations
            </Link>
            <Link
              to={"/"}
              className="flex align-middle border-b-[1px] border-[#ffffff] border-opacity-30 p-[10px]"
            >
              <BsBarChartLine className="text-[30px] pr-[10px]" />
              Market Research
            </Link>
            <Link
              to={"/"}
              className="flex align-middle border-b-[1px] border-[#ffffff] border-opacity-30 p-[10px]"
            >
              <BsSendCheck className="text-[30px] pr-[10px]" />
              Business Campaign
            </Link>
            <Link to={"/"} className="flex align-middle  p-[10px]">
              <BsGlobe2 className="text-[30px] pr-[10px]" />
              Digital Solutions
            </Link>
          </div> */}
        </Link>
        <Link to={"/"}>Client</Link>
        <Link to={"/"}>Pricing</Link>
        <Link to={"/"}>Blog</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </div>
  );

  return (
    <>
      <div className={`fixed top-0 left-0 w-full xs:bg-[#f5f5f5] lg:bg-transparent z-10 font-Sora transition-all duration-300 ease-in-out ${isScrolled ? "lg:bg-white lg:text-dropdown" : "lg:bg-transparent lg:text-white"}`}>
        <header>
          <div className="flex flex-row justify-between p-[20px]">
            <div className="">
              {/* <img
                src="/images/demo-business-logo-black.png"
                alt="Black Logo"
                className="block lg:hidden w-auto h-auto"
              />
              <img
                src="/images/demo-business-logo-white.png"
                alt="White Logo"
                className="hidden lg:block w-auto h-auto"
              /> */}
              <img src="/images/Listacc-logo-01.png" alt=""  className="w-[100px] h-[40px]"/>
            </div>

            <div className="w-[50%] xs:hidden lg:block py-[4px]">
              {desktopnav}
            </div>
            <div className=" space-x-4 flex align-middle ">
              <div className="xs:hidden xl:block py-[4px]">
                <p>1 800 222 000</p>
              </div>
              <button className=" border-[2px] py-[4px] px-[20px] rounded-3xl border-[#1a2c58] xs:hidden md:block ">
                Get A Quote
              </button>
              <button
                onClick={toggleMenu}
                className="text-[25px] font-bold lg:hidden py-[4px]"
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
          <div>
            <nav
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                isOpen ? "max-h-[999px] pt-[20px]" : "max-h-0 pt-0"
              } flex flex-col px-[20px] space-y-3 text-[17px] font-sans`}
            >
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/"} className="" onClick={toggleDropDown}>
                <div className="flex flex-row justify-between ">
                  Services
                  <button className="font-bold text-3xl">
                    {dropDown ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
                  </button>
                </div>
                {/* <div
                  className={`${
                    dropDown ? "block" : "hidden"
                  } flex flex-col bg-dropdown mx-[-20px] p-[20px] space-y-[20px] text-lg text-white`}
                >
                  <Link
                    to={"/"}
                    className="flex align-middle border-b-[1px] border-[#ffffff] border-opacity-30 p-[10px]"
                  >
                    <PiSuitcaseSimpleThin className="text-[30px] pr-[10px]" />
                    Business Planning
                  </Link>
                  <Link
                    to={"/"}
                    className="flex align-middle border-b-[1px] border-[#ffffff] border-opacity-30 p-[10px]"
                  >
                    <BsClipboardData className="text-[30px] pr-[10px]" />
                    Business Research
                  </Link>
                  <Link
                    to={"/"}
                    className="flex align-middle border-b-[1px] border-[#ffffff] border-opacity-30 p-[10px]"
                  >
                    <TbPeace className="text-[30px] pr-[10px]" />
                    Tracking operations
                  </Link>
                  <Link
                    to={"/"}
                    className="flex align-middle border-b-[1px] border-[#ffffff] border-opacity-30 p-[10px]"
                  >
                    <BsBarChartLine className="text-[30px] pr-[10px]" />
                    Market Research
                  </Link>
                  <Link
                    to={"/"}
                    className="flex align-middle border-b-[1px] border-[#ffffff] border-opacity-30 p-[10px]"
                  >
                    <BsSendCheck className="text-[30px] pr-[10px]" />
                    Business Campaign
                  </Link>
                  <Link to={"/"} className="flex align-middle  p-[10px]">
                    <BsGlobe2 className="text-[30px] pr-[10px]" />
                    Digital Solutions
                  </Link>
                </div> */}
              </Link>
              <Link to={"/"}>Client</Link>
              <Link to={"/"}>Pricing</Link>
              <Link to={"/"}>Blog</Link>
              <Link to={"/contact"}>Contact</Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
