import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <div>
      <div>
        {/* section1 */}
        <div className="bg-[#1a2c58] h-[480px] flex justify-center items-center flex-col">
          <h1 className="w-[90%] text-center xs:text-[40px] lg:text-[76px] text-white my-[20px] font-BeVietnam">
            About-business
          </h1>
          <RiArrowDropDownLine className="text-white xs:text-[40px] lg:text-[75px]" />
        </div>
        {/* section2 */}
        <div className="bg-[#f5f5f5] flex xs:flex-col lg:flex-row xs:justify-center lg:justify-end lg:p-[100px] xs:mx-auto">
          <div className="flex items-center justify-center lg:mx-[50px] ">
            <button
              className="bg-white w-[100px] h-[100px] rounded-full flex justify-center items-center"
              style={{
                animation: "pingSlow 2s infinite",
              }}
            >
              <FaPlay className="text-textColorOne"/>
            </button>
          </div>
          <div className="xs:text-center lg:text-left space-y-[25px] xs:w-full lg:w-[40%] lg:my-[50px]">
            <p className="bg-sectionthreecolor text-textColorOne w-[172px] xs:m-auto lg:m-4 text-[13px] py-[15px] px-[10px] rounded-full font-bold text-center">
              ABOUT BUSINESS
            </p>
            <h3 className="text-dropdown text-[33.37px] w-[90%] font-bold">
              Provide advanced business solutions.
            </h3>
            <p className="text-textColorTwo text-[17px]">
              Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod
              tempor ut incididunt labore et dolore magna ut enim minim veniam
              adipiscing. Lorem ipsum dolor consectetur et adipiscing elit
              eiusmod tempor incididunt adipiscing.
            </p>
            <button className="bg-dropdown text-white w-[60%] m-auto text-[13px] py-[15px] px-[10px] rounded-full font-bold flex justify-center space-x-2">
              OUR SERVICES <FaArrowRight className="text-xl mx-[5px]" />
            </button>
          </div>
        </div>
        {/* section 3 */}
        <div className="bg-[#f5f5f5] font-Sora text-dropdown xs:text-center flex xs:flex-col lg:flex-row justify-evenly pb-4">
          <div className="text-[21px] flex justify-center items-center lg:border-r-[10px] lg:border-textColorOne px-[20px]">
            <span className="text-[82px] font-bold">30</span>Years working experience
          </div>
          <div>
            <h1 className="text-[41px] font-bold">5M+</h1>
            <p className="text-[18px]">project completed</p>
            <p className="text-[17px] text-textColorTwo">lorem simply text</p>
          </div>
          <div>
            <h1 className="text-[41px] font-bold">64K</h1>
            <p className="text-[18px]">Satisfied customer</p>
            <p className="text-[17px] text-textColorTwo">lorem simply text</p>
          </div>
        </div>
        {/* section4 */}
        <div className="bg-sectionthreecolor font-Sora p-[7%] text-dropdown">
          <p className="text-center bg-white text-textColorOne w-[162px] p-[10px] mx-auto rounded-full font-bold">PROCESS CYCLE</p>
          <h1 className="xs:text-[33.7px] lg:text-[45px] text-center xs:w-[90%] lg:w-[450px] mx-auto font-bold">Smart and effective business solutions</h1>

          <div className="flex flex-row flex-wrap justify-between ">
            <div className="bg-white lg:w-[45%] xs:w-full p-[20px] my-[20px] flex rounded-lg justify-between">
              <span className="w-[40%] xs:text-[39px] lg:text-[55px] font-bold xs:mx-4">2010</span>
              <div className="border-l-[1px] border-l-textColorTwo pl-[10px] w-[60%]">
                <p>Business Founded</p>
                <p className="text-textColorTwo">Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className="bg-white lg:w-[45%] xs:w-full p-[20px] my-[20px] flex rounded-lg justify-between">
              <span className="w-[40%] xs:text-[39px] lg:text-[55px] font-bold xs:mx-4">2012</span>
              <div className="border-l-[1px] border-l-textColorTwo pl-[10px] w-[60%]">
                <p>Build new Office</p>
                <p className="text-textColorTwo">Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className="bg-white lg:w-[45%] xs:w-full p-[20px] my-[20px] flex rounded-lg justify-between">
              <span className="w-[40%] xs:text-[39px] lg:text-[55px] font-bold xs:mx-4">2014</span>
              <div className="border-l-[1px] border-l-textColorTwo pl-[10px] w-[60%]"> 
                <p>Relocates Headquater</p>
                <p className="text-textColorTwo">Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className="bg-white lg:w-[45%] xs:w-full p-[20px] my-[20px] flex rounded-lg justify-between">
              <span className="w-[40%] xs:text-[39px] lg:text-[55px] font-bold xs:mx-4">2018</span>
              <div className="border-l-[1px] border-l-textColorTwo pl-[10px] w-[60%]">
                <p>Revenue of millions</p>
                <p className="text-textColorTwo">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
