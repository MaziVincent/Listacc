import { useEffect, useState, type SyntheticEvent } from "react";
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
	const [currentSlide, setCurrentSlide] = useState(0);
	const [busServ, setActBusServ] =
		useState<BusinessServiceKey>("businessPlanning");

	type BusinessServiceKey =
		| "businessPlanning"
		| "businessResearch"
		| "trackingOperations"
		| "businessCampaign";

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	// Fallback when an image fails to load
	const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		const fallback =
			"https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
		const img = e.currentTarget;
		if (img.src !== fallback) {
			img.src = fallback;
		}
	};

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
			title: "Starter Package",
			description:
				"Perfect for small businesses and startups looking to establish their digital presence with essential software solutions.",
			price: "2,500",
		},
		{
			title: "Professional Package",
			description:
				"Comprehensive software development services for growing businesses, including custom applications and integrations.",
			price: "5,000",
		},
		{
			title: "Enterprise Package",
			description:
				"Full-scale digital transformation solutions with AI integration, cloud migration, and ongoing support for large organizations.",
			price: "15,000",
		},
	];

	const businessServices = {
		businessPlanning: (
			<div className="xs:text-center lg:text-left space-y-4">
				<div className="text-textColorOne flex items-center space-x-3">
					<PiSuitcase className="bg-white w-[60px] h-[60px] rounded-full p-[10px] text-textColorOne" />
					<p>Custom Software Development</p>{" "}
				</div>
				<h1 className="font-bold text-2xl">
					Tailored solutions for your business needs
				</h1>
				<p>
					We develop custom software applications that streamline your
					operations, enhance productivity, and drive digital transformation for
					your organization.
				</p>
				<button className="py-[10px] rounded-full bg-textColorOne px-[20px] text-white">
					Learn More
				</button>
			</div>
		),
		businessResearch: (
			<div className="xs:text-center lg:text-left space-y-4">
				<div className="text-textColorOne flex items-center space-x-3">
					<FiEdit className="bg-white w-[60px] h-[60px] rounded-full p-[10px] text-textColorOne" />{" "}
					Web & Mobile Development
				</div>
				<h1 className="font-bold text-2xl">
					Modern web and mobile applications
				</h1>
				<p>
					From responsive websites to cross-platform mobile apps, we create
					engaging digital experiences that connect you with your customers.
				</p>
				<button className="py-[10px] rounded-full bg-textColorOne px-[20px] text-white">
					Learn More
				</button>
			</div>
		),
		trackingOperations: (
			<div className="xs:text-center lg:text-left space-y-4">
				<div className="text-textColorOne flex items-center space-x-3">
					<PiCompass className="bg-white w-[60px] h-[60px] rounded-full p-[10px] text-textColorOne" />{" "}
					Cloud Solutions
				</div>
				<h1 className="font-bold text-2xl">
					Scalable cloud infrastructure and services
				</h1>
				<p>
					Migrate to the cloud with confidence. We provide secure, scalable
					cloud solutions that reduce costs and improve performance.
				</p>
				<button className="py-[10px] rounded-full bg-textColorOne px-[20px] text-white">
					Learn More
				</button>
			</div>
		),
		businessCampaign: (
			<div className="xs:text-center lg:text-left space-y-4">
				<div className="text-textColorOne flex items-center space-x-3">
					<BsGlobe2 className="bg-white w-[60px] h-[60px] rounded-full p-[10px] text-textColorOne" />{" "}
					AI & Data Analytics
				</div>
				<h1 className="font-bold text-2xl">
					Intelligent solutions powered by AI
				</h1>
				<p>
					Harness the power of artificial intelligence and data analytics to
					gain insights, automate processes, and make data-driven decisions.
				</p>
				<button className="py-[10px] rounded-full bg-textColorOne px-[20px] text-white">
					Learn More
				</button>
			</div>
		),
	};

	// Modern hero slides with high-quality, royalty-free images
	const slides = [
		{
			id: 0,
			image:
				"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
			alt: "Developer writing code on a laptop in a modern workspace",
			kicker: "Transforming Ideas into Digital Realities",
			heading:
				"We build innovative software solutions that drive growth in the digital age.",
		},
		{
			id: 1,
			image:
				"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
			alt: "Abstract circuit board representing AI and technology",
			kicker: "Solving Complex Challenges with Technology",
			heading: "From custom software development to AI-powered solutions.",
		},
		{
			id: 2,
			image:
				"https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
			alt: "Cloud infrastructure and servers for scalable solutions",
			kicker: "Unlock Your Business Potential with Tailored Software",
			heading:
				"Streamline operations, enhance customer experiences, and achieve growth.",
		},
		{
			id: 3,
			image:
				"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
			alt: "Team collaborating around a table in a modern office",
			kicker: "Partner with a Team of Dedicated Software Experts",
			heading:
				"Our development approach ensures timely delivery and exceptional quality.",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 10000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="font-Sora">
			{/* start image slider */}
			<section className="relative h-screen w-full overflow-hidden">
				{/* Slides */}
				<div className="flex h-full w-full">
					{slides.map((slide) => (
						<div
							key={slide.id}
							className="relative w-full h-full flex items-center xs:justify-center lg:justify-start flex-shrink-0 transition-transform duration-[1200ms] ease-out"
							style={{ transform: `translateX(-${currentSlide * 100}%)` }}
							aria-hidden={currentSlide !== slide.id}>
							{/* Background image */}
							<img
								src={slide.image}
								alt={slide.alt}
								className="absolute inset-0 w-full h-full object-cover bg-neutral-900"
								onError={handleImgError}
							/>
							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/20" />
							{/* Content */}
							<div className="relative z-10 xs:w-[90%] lg:w-[80%] lg:pl-[100px]">
								<p className="text-xl m-[20px] text-[#f5f5f5] xs:w-full lg:w-[80%]">
									{slide.kicker}
								</p>
								<h1 className="xs:text-5xl lg:text-6xl font-bold m-[20px] text-white xs:w-full lg:w-full">
									{slide.heading}
								</h1>
							</div>
						</div>
					))}
				</div>
				{/* Dots */}
				<div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 px-4">
					{slides.map((slide) => (
						<button
							key={slide.id}
							onClick={() => goToSlide(slide.id)}
							aria-label={`Go to slide ${slide.id + 1}`}
							className={`rounded-full p-[6px] flex items-center justify-center transition-colors ${
								currentSlide === slide.id
									? "text-white"
									: "text-white/60 hover:text-white"
							}`}>
							<GoDotFill className="text-2xl" />
						</button>
					))}
				</div>
			</section>
			{/* End Image slider */}
			{/* Start second section */}
			<div className="py-[40px] flex flex-wrap border-b-[1px] border-[#f5f5f5] ">
				<p className="flex text-center justify-center p-[20px] space-x-3 xs:w-full md:w-[50%] lg:w-[25%]">
					<span>
						<GoShieldCheck className="text-3xl text-textColorOne " />{" "}
					</span>
					Secure & Reliable Code
				</p>
				<p className="flex text-center justify-center p-[20px] space-x-3 xs:w-full md:w-[50%] lg:w-[25%]">
					<span>
						<BsHourglass className="text-3xl text-textColorOne " />
					</span>
					Agile Development
				</p>
				<p className="flex text-center justify-center p-[20px] space-x-3 xs:w-full md:w-[50%] lg:w-[25%]">
					<span>
						<BsAward className="text-3xl text-textColorOne " />
					</span>
					Industry Recognition
				</p>
				<p className="flex text-center justify-center p-[20px] space-x-3 xs:w-full md:w-[50%] lg:w-[25%]">
					<span>
						<PiSuitcaseSimpleThin className="text-3xl text-textColorOne " />
					</span>
					Digital Transformation
				</p>
			</div>
			{/* end second section */}
			{/* Start section two */}
			<div className="xs:text-center lg:text-left py-[50px] xs:w-[85%] lg:w-[40%] xs:mx-auto lg:mx-[50px] space-y-4">
				<button className="py-[10px] px-[20px] text-textColorOne bg-sectionthreecolor rounded-full text-[13px] font-bold">
					ABOUT LISTACC LIMITED
				</button>
				<p className="xs:text-[30px] lg:text-[44px] font-bold">
					Innovative software solutions for modern businesses.
				</p>
				<p className="text-[#868D98]">
					We are passionate about creating cutting-edge software that transforms
					businesses. With over 8 years of experience in software development,
					we have delivered exceptional digital solutions to clients worldwide.
				</p>
				<div className="flex items-center space-x-2">
					<div className="border-[5px] p-[20px] border-textColorOne rounded-full w-[]">
						200+
					</div>
					<p className="text-[20px]">
						Successful projects delivered in the{" "}
						<span className="text-textColorOne font-bold underline">
							last 5 years.
						</span>
					</p>
				</div>
			</div>
			{/* end section 2 */}
			{/* start section 3 */}
			<div className="bg-sectionthreecolor py-[50px] px-[20px]">
				<h1 className="text-[33px] text-center">
					Comprehensive Software Development Services
				</h1>
				<div className="flex xs:flex-col lg:flex-row justify-between lg:m-[100px] xs:my-[50px]">
					<ul className="lg:w-[30%] px-[15px] space-y-4">
						<li
							className={`hover:bg-white hover:text-textColorOne hover:cursor-pointer ${
								busServ === "businessPlanning"
									? "bg-white text-textColorOne"
									: ""
							} w-[260px] px-[20px] py-[20px] flex text-[18px] space-x-4 rounded-md transition-[background , color] duration-1000 ease-in-out text-center`}
							onClick={() => setActBusServ("businessPlanning")}>
							<PiSuitcase className="text-2xl" />
							Custom Software
						</li>
						<li
							className={`hover:bg-white hover:text-textColorOne hover:cursor-pointer ${
								busServ === "businessResearch"
									? "bg-white text-textColorOne"
									: ""
							} w-[260px] px-[20px] py-[20px] flex text-[18px] space-x-4 rounded-md transition-[background , color] duration-1000 ease-in-out text-center`}
							onClick={() => setActBusServ("businessResearch")}>
							<FiEdit className="text-2xl" />
							Web & Mobile Apps
						</li>
						<li
							className={`hover:bg-white hover:text-textColorOne hover:cursor-pointer ${
								busServ === "trackingOperations"
									? "bg-white text-textColorOne"
									: ""
							} w-[260px] px-[20px] py-[20px] flex text-[18px] space-x-4 rounded-md transition-[background , color] duration-1000 ease-in-out text-center`}
							onClick={() => setActBusServ("trackingOperations")}>
							<PiCompass className="text-2xl" />
							Cloud Solutions
						</li>
						<li
							className={`hover:bg-white hover:text-textColorOne hover:cursor-pointer ${
								busServ === "businessCampaign"
									? "bg-white text-textColorOne"
									: ""
							} w-[260px] px-[20px] py-[20px] flex text-[18px] space-x-4 rounded-md transition-[background , color] duration-1000 ease-in-out text-center`}
							onClick={() => setActBusServ("businessCampaign")}>
							<BsGlobe2 className="text-2xl" />
							AI & Analytics
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
						SOFTWARE PACKAGES
					</p>
					<h3 className="text-dropdown text-[33.37px] w-[90%] font-bold">
						Choose the perfect software solution for your business.
					</h3>
					<p className="text-textColorTwo text-[17px]">
						From startups to enterprise organizations, we offer scalable
						software development packages designed to meet your specific needs
						and budget requirements.
					</p>
					<button className="bg-dropdown text-white w-[60%] m-auto text-[13px] py-[15px] px-[10px] rounded-full font-bold">
						GET QUOTE
					</button>
				</div>
				<div className="xs:w-full lg:w-[50%] my-[50px] max-w-md mx-auto space-y-5">
					{planData.map((plan, index) => (
						<div
							key={index}
							className={`border rounded-md overflow-hidden shadow ${
								openIndex === index ? "bg-textColorOne text-white" : ""
							}`}>
							{/* Header */}
							<div
								onClick={() => toggle(index)}
								className="flex justify-between items-center p-4 cursor-pointer">
								<h2 className="text-lg font-semibold">{plan.title}</h2>
								<span
									className={`transform transition-transform duration-300 text-3xl ${
										openIndex === index ? "rotate-180" : ""
									}`}>
									<RiArrowDropDownLine />
								</span>
							</div>

							{/* Content */}
							<div
								className={`bg-textColorOne text-white transition-all duration-500 ease-in-out overflow-hidden ${
									openIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
								}`}>
								<p className=" mb-4">{plan.description}</p>
								<div className="flex items-center justify-between">
									<h3 className="text-xl font-bold">
										${plan.price}{" "}
										<span className="text-sm font-normal">/ Project</span>
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

export default Home;
