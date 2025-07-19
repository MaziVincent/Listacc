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
						<Link to="/contact">Contact</Link>
					</div>

					<div className="xs:w-[50%] lg:w-[25%]">
						<p className="font-Sora text-white text-xl">Social Connect</p>
						<p>Facebook</p>
						<p>Twitter</p>
						<p>Instagram</p>
					</div>
					<div className="xs:w-[50%] lg:w-[25%]">
						<p className="font-Sora text-white text-xl">Get in touch</p>
						<p>3rd Floor, DreamLinks Concept</p>
						<p>Abakaliki, EB, NG </p>
						<p className="flex text-white space-x-2 items-center">
							<FiPhoneCall />
							+234 8138699452
						</p>
						<p className="flex text-white space-x-2 items-center">
							<FiPhoneCall />
							+234 8166300937
						</p>
						<p className="flex text-white space-x-2 items-center">
							<CiMail /> <span className="underline">info@domain.com</span>
						</p>
					</div>
				</div>
			</div>
			<div className="">
				<p>
					&copy; 2025 <span className="underline text-white">Listacc Ltd.</span>
				</p>
			</div>
		</div>
	);
}

export default Footer