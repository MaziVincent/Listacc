import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

function Footer() {
  return (
		<div className=" px-10  bg-[#1a2c58] text-textColorTwo py-5 font-BeVietnam text-[17px] xs:py-10">
			<div className=" lg:w-[80%] xs:w-[90%] ">
				<img
					src="/images/Listacc-logo-01.png"
					alt=""
					className="w-32"
				/>
			</div>
			<div className="flex  lg:w-[80%] xs:w-[90%] xs:flex-col-reverse gap-10 lg:flex-row  justify-evenly">
				<div className="lg:w-[20%]">
					<p></p>
				</div>
				<div className="flex justify-between lg:w-[80%] flex-wrap xs:my-3 lg:my-0">
					<div className="xs:w-[50%] lg:w-[25%] flex flex-col">
						<p className="font-Sora text-white text-xl">Company</p>
						<Link to="/about">About Us</Link>
						<Link to="/services">Services</Link>
						<Link to="/contact">Contact</Link>
						<p>Portfolio</p>
					</div>

					<div className="xs:w-[50%] lg:w-[25%]">
						<p className="font-Sora text-white text-xl">Services</p>
						<p>Custom Software</p>
						<p>Web Development</p>
						<p>Mobile Apps</p>
						<p>Cloud Solutions</p>
					</div>
					<div className="xs:w-[60%] lg:w-[25%]">
						<p className="font-Sora text-white text-xl">Contact Info</p>
						<p>3rd Floor, Dreamlinks Concept Building</p>
						<p>Abakaliki, Nigeria</p>
						<p className="flex text-white space-x-2 items-center">
							<FiPhoneCall />
							+234 8138699452
						</p>
						<p className="flex text-white space-x-2 items-center">
							<FiPhoneCall />
							+234 8166300937
						</p>
						<p className="flex text-white space-x-2 items-center">
							<CiMail /> <span className="underline">info@listacc.com</span>
						</p>
					</div>
				</div>
			</div>
			<div className="">
				<p>
					&copy; 2025 <span className="underline text-white">Listacc Limited</span> - Software Development Company. All rights reserved.
				</p>
			</div>
		</div>
	);
}

export default Footer