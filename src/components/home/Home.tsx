import { useEffect, useState } from "react"
import { GoDotFill } from "react-icons/go";
import { GoShieldCheck } from "react-icons/go";
import { BsHourglass } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { PiSuitcase } from "react-icons/pi";
import { PiCompass } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

function Home() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [busServ, setActBusServ] = useState<BusinessServiceKey>('businessPlanning');


    type BusinessServiceKey = 'businessPlanning' | 'businessResearch' | 'trackingOperations' | 'businessCampaign';


    const goToSlide = (index: number)=>{
        setCurrentSlide(index)
    }
    


  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const planData = [
    {
      title: "Basic Plan",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quaerat?",
      price: "19.99",
    },
    {
      title: "Standard Plan",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ex?",
      price: "29.99",
    },
    {
      title: "Premium Plan",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?",
      price: "49.99",
    },
  ];

    const businessServices = {
        businessPlanning : (
            <div className="xs:text-center lg:text-left space-y-4">
                <div className="text-textColorOne flex items-center space-x-3"><PiSuitcase className="bg-white w-[60px] h-[60px] rounded-full p-[10px] text-textColorOne"/><p>Grow and succeed</p> </div>
                <h1 className="font-bold text-2xl">Work together to make experience</h1>
                <p>We always want our client grow with the product we have delivered and maintaining strong long-term good relationship.</p>
                <button className="py-[10px] rounded-full bg-textColorOne px-[20px] text-white">Explore now</button>
            </div>
        ),
        businessResearch : (
            <div className="xs:text-center lg:text-left space-y-4">
                <div className="text-textColorOne flex items-center space-x-3"><FiEdit className="bg-white w-[60px] h-[60px] rounded-full p-[10px] text-textColorOne"/> Identity strategy</div>
                <h1 className="font-bold text-2xl">Help our clients succeed by brand</h1>
                <p>We always want our client grow with the product we have delivered and maintaining strong long-term good relationship.</p>
                <button className="py-[10px] rounded-full bg-textColorOne px-[20px] text-white">Explore now</button>
            </div>
        ),
        trackingOperations : (
            <div className="xs:text-center lg:text-left space-y-4">
                <div className="text-textColorOne flex items-center space-x-3"><PiCompass className="bg-white w-[60px] h-[60px] rounded-full p-[10px] text-textColorOne"/> Grow and succeed</div>
                <h1 className="font-bold text-2xl">Work together to make experience</h1>
                <p>We always want our client grow with the product we have delivered and maintaining strong long-term good relationship.</p>
                <button className="py-[10px] rounded-full bg-textColorOne px-[20px] text-white">Explore now</button>
            </div>
        ),
        businessCampaign : (
            <div className="xs:text-center lg:text-left space-y-4">
                <div className="text-textColorOne flex items-center space-x-3"><PiSuitcase className="bg-white w-[60px] h-[60px] rounded-full p-[10px] text-textColorOne"/> Experience Strategy</div>
                <h1 className="font-bold text-2xl">Help our clients succeed by brand</h1>
                <p>We always want our client grow with the product we have delivered and maintaining strong long-term good relationship.</p>
                <button className="py-[10px] rounded-full bg-textColorOne px-[20px] text-white">Explore now</button>
            </div>
        ),
    }

    
    const slideOne = (
			<div className="  h-max bg-[url('https://via.placeholder.com/1920x1100')] xs:w-[90%] lg:w-[80%] lg:pl-[100px]">
				<p className="text-xl m-[20px] text-[#f5f5f5] xs:w-full lg:w-[80%]">
					Transforming Ideas into Digital Realities
				</p>
				<p className="xs:text-5xl lg:text-6xl font-bold m-[20px] text-white xs:w-full lg:w-full">
					We build innovative software solutions that drive growth in the digital age.
				</p>
			</div>
		);
    const slideTwo = (
			<div className="  h-max bg-[url('https://via.placeholder.com/1920x1100')] xs:w-[90%] lg:w-[80%] lg:pl-[100px]">
				<p className="text-xl m-[20px]  text-[#f5f5f5] xs:w-full lg:w-[80%]">
					Solving Complex Challenges with Technology
				</p>
				<p className="xs:text-5xl lg:text-6xl font-bold m-[20px]  text-white xs:w-full lg:w-full">
					From custom software development to AI-powered solutions.
				</p>
			</div>
		);
    const slideThree = (
			<div className="  h-max bg-[url('https://via.placeholder.com/1920x1100')] xs:w-[90%] lg:w-[80%] lg:pl-[100px]">
				<p className="text-xl m-[20px]  text-[#f5f5f5] xs:w-full lg:w-[80%]">
					Unlock Your Business Potential with Tailored Software
				</p>
				<p className="xs:text-5xl lg:text-6xl font-bold m-[20px]  text-white xs:w-full lg:w-full">
					Streamline operations, enhance customer experiences, and achieve growth.
				</p>
			</div>
    );
  
    const slideFour = (
			<div className="  h-max bg-[url('https://via.placeholder.com/1920x1100')] xs:w-[90%] lg:w-[80%] lg:pl-[100px]">
				<p className="text-xl m-[20px]  text-[#f5f5f5] xs:w-full lg:w-[80%]">
					Partner with a Team of Dedicated Software Experts
				</p>
				<p className="xs:text-5xl lg:text-6xl font-bold m-[20px]  text-white xs:w-full lg:w-full">
					Our development approach ensures timely delivery, and exceptional quality
				</p>
			</div>
		);
    
    const slides = [
        {id:0, content:slideOne },
        {id:1, content:slideTwo },
        {id:2, content:slideThree },
        {id:3, content:slideFour }
    ]

    useEffect (()=>{
        const interval = setInterval(() => {
            setCurrentSlide((prev)=>(prev +1) % slides.length)
        }, 10000);

        return ()=> clearInterval(interval)
    },[])
    return (
			<div className="font-Sora">
				{/* start image slider */}
				<div className="bg-gradient-to-tr from-textColorOne to-textColorTwo  py-[20px] h-screen flex flex-col justify-evenly">
					<div className="overflow-hidden flex w-full ">
						{slides.map((slide) => (
							<div
								key={slide.id}
								className="w-full h-full flex items-center xs:justify-center lg:justify-start flex-shrink-0 transition-transform duration-[5s] ease-in-out m-auto"
								style={{ transform: `translateX(-${currentSlide * 100}%)` }}
							>
								{slide.content}
							</div>
						))}
					</div>
					<div className="flex justify-evenly flex-row m-[20px] w-[30%] mx-auto ">
						{slides.map((slide) => (
							<button
								key={slide.id}
								onClick={() => goToSlide(slide.id)}
								className={`border-[1px] transform-border ease-out duration-[5s] rounded-full p-[5px] flex items-center justify-center ${
									currentSlide === slide.id
										? "border-[#c7c7c7] text-white"
										: "border-none text-[#c7c7c7]"
								}`}
							>
								<GoDotFill />
							</button>
						))}
					</div>
				</div>
				{/* End Image slider */}
				{/* Start second section */}
				<div className="py-[40px] flex flex-wrap border-b-[1px] border-[#f5f5f5] ">
					<p className="flex text-center justify-center p-[20px] space-x-3 xs:w-full md:w-[50%] lg:w-[25%]">
						<span>
							<GoShieldCheck className="text-3xl text-textColorOne " />{" "}
						</span>
						World-class services
					</p>
					<p className="flex text-center justify-center p-[20px] space-x-3 xs:w-full md:w-[50%] lg:w-[25%]">
						<span>
							<BsHourglass className="text-3xl text-textColorOne " />
						</span>
						Experience strategy
					</p>
					<p className="flex text-center justify-center p-[20px] space-x-3 xs:w-full md:w-[50%] lg:w-[25%]">
						<span>
							<BsAward className="text-3xl text-textColorOne " />
						</span>
						Award winning agency
					</p>
					<p className="flex text-center justify-center p-[20px] space-x-3 xs:w-full md:w-[50%] lg:w-[25%]">
						<span>
							<PiSuitcaseSimpleThin className="text-3xl text-textColorOne " />
						</span>
						Grow your business
					</p>
				</div>
				{/* end second section */}
				{/* Start section two */}
				<div className="xs:text-center lg:text-left py-[50px] xs:w-[85%] lg:w-[40%] xs:mx-auto lg:mx-[50px] space-y-4">
					<button className="py-[10px] px-[20px] text-textColorOne bg-sectionthreecolor rounded-full text-[13px] font-bold">
						ABOUT LISTACC
					</button>
					<p className="xs:text-[30px] lg:text-[44px] font-bold">
						Smart and effective business solutions.
					</p>
					<p className="text-[#868D98]">
						We are excited for our work and how it positively impacts clients.
						With over 12 years of experience we have been constantly providing
						excellent solutions.
					</p>
					<div className="flex items-center space-x-2">
						<div className="border-[5px] p-[20px] border-textColorOne rounded-full w-[]">
							90%
						</div>
						<p className="text-[20px]">
							Increased revenue in the{" "}
							<span className="text-textColorOne font-bold underline">
								last 2 years.
							</span>
						</p>
					</div>
				</div>
				{/* end section 2 */}
				{/* start section 3 */}
				<div className="bg-sectionthreecolor py-[50px] px-[20px]">
					<h1 className="text-[33px] text-center">
						Professional and highly dedicated software development Company
					</h1>
					<div className="flex xs:flex-col lg:flex-row justify-between lg:m-[100px] xs:my-[50px]">
						<ul className="lg:w-[30%] px-[15px] space-y-4">
							<li
								className={`hover:bg-white hover:text-textColorOne hover:cursor-pointer ${
									busServ === "businessPlanning"
										? "bg-white text-textColorOne"
										: ""
								} w-[260px] px-[20px] py-[20px] flex text-[18px] space-x-4 rounded-md transition-[background , color] duration-1000 ease-in-out text-center`}
								onClick={() => setActBusServ("businessPlanning")}
							>
								<PiSuitcase className="text-2xl" />
								Business Planning
							</li>
							<li
								className={`hover:bg-white hover:text-textColorOne hover:cursor-pointer ${
									busServ === "businessResearch"
										? "bg-white text-textColorOne"
										: ""
								} w-[260px] px-[20px] py-[20px] flex text-[18px] space-x-4 rounded-md transition-[background , color] duration-1000 ease-in-out text-center`}
								onClick={() => setActBusServ("businessResearch")}
							>
								<FiEdit className="text-2xl" />
								Business research
							</li>
							<li
								className={`hover:bg-white hover:text-textColorOne hover:cursor-pointer ${
									busServ === "trackingOperations"
										? "bg-white text-textColorOne"
										: ""
								} w-[260px] px-[20px] py-[20px] flex text-[18px] space-x-4 rounded-md transition-[background , color] duration-1000 ease-in-out text-center`}
								onClick={() => setActBusServ("trackingOperations")}
							>
								<PiCompass className="text-2xl" />
								Trackin operations
							</li>
							<li
								className={`hover:bg-white hover:text-textColorOne hover:cursor-pointer ${
									busServ === "businessCampaign"
										? "bg-white text-textColorOne"
										: ""
								} w-[260px] px-[20px] py-[20px] flex text-[18px] space-x-4 rounded-md transition-[background , color] duration-1000 ease-in-out text-center`}
								onClick={() => setActBusServ("businessCampaign")}
							>
								<BsGlobe2 className="text-2xl" />
								Business campaign
							</li>
						</ul>
						<div className="lg:w-[30%] transition-all duration-1000 ease-in-out my-[50px] ">
							{businessServices[busServ]}
						</div>
					</div>
				</div>
				{/* end section 3 */}
				{/* start section 4 */}
				<div className="py-[50px] px-[15px] flex xs:flex-col lg:flex-row w-[80%] mx-auto">
					<div className="xs:text-center lg:text-left space-y-[25px] xs:w-full lg:w-[50%]">
						<p className="bg-sectionthreecolor text-textColorOne w-[172px] m-auto text-[13px] py-[15px] px-[10px] rounded-full font-bold text-center">
							FLEXIBLE PRICING
						</p>
						<h3 className="text-dropdown text-[33.37px] w-[90%] font-bold">
							Tailored pricing plans for everyone.
						</h3>
						<p className="text-textColorTwo text-[17px]">
							We are excited for our work and how it positively impacts clients.
							With over 12 years of experience we have been constantly providing
							excellent solutions.
						</p>
						<button className="bg-dropdown text-white w-[60%] m-auto text-[13px] py-[15px] px-[10px] rounded-full font-bold">
							VIEW ALL PLANS
						</button>
					</div>
					<div className="xs:w-full lg:w-[50%] my-[50px] max-w-md mx-auto space-y-5">
						{planData.map((plan, index) => (
							<div
								key={index}
								className={`border rounded-md overflow-hidden shadow ${
									openIndex === index ? "bg-textColorOne text-white" : ""
								}`}
							>
								{/* Header */}
								<div
									onClick={() => toggle(index)}
									className="flex justify-between items-center p-4 cursor-pointer"
								>
									<h2 className="text-lg font-semibold">{plan.title}</h2>
									<span
										className={`transform transition-transform duration-300 text-3xl ${
											openIndex === index ? "rotate-180" : ""
										}`}
									>
										<RiArrowDropDownLine />
									</span>
								</div>

								{/* Content */}
								<div
									className={`bg-textColorOne text-white transition-all duration-500 ease-in-out overflow-hidden ${
										openIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
									}`}
								>
									<p className=" mb-4">{plan.description}</p>
									<div className="flex items-center justify-between">
										<h3 className="text-xl font-bold">
											${plan.price}{" "}
											<span className="text-sm font-normal">/ Monthly</span>
										</h3>
										<button className=" text-white border-[1px] border-white py-2 px-4 rounded-full">
											GET STARTED
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
}

export default Home