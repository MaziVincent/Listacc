import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	// const [dropDown, setDropDown] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
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

	const desktopnav = (
		<div className="flex justify-end">
			<nav className={`flex flex-row gap-10 text-lg`}>
				<Link className="hover:text-gray-300" to={"/"}>
					Home
				</Link>
				<Link className="hover:text-gray-300" to={"/about"}>
					About
				</Link>
				<Link className="hover:text-gray-300" to={"/services"}>
					Services
				</Link>
				<Link className="hover:text-gray-300" to={"/contact"}>
					Contact
				</Link>
			</nav>
		</div>
	);

	return (
		<>
			<div
				className={`fixed top-0 left-0 w-full z-10 font-Sora transition-all duration-300 ease-in-out ${
					isScrolled
						? "bg-white text-dropdown shadow-lg"
						: "bg-transparent text-white"
				} `}>
				<header className="">
					<div className="flex flex-row justify-between items-center px-10 py-3">
						<div className=" w-32">
							<Link to="/">
								<img
									src={`${
										isScrolled
											? "/images/Listacc-logo-01.png"
											: "/images/logo-light.png"
									}`}
									alt=""
									className="w-full"
								/>
							</Link>
						</div>

						<div className="w-[50%] xs:hidden lg:block py-[4px]">
							{desktopnav}
						</div>
						<button
							onClick={toggleMenu}
							className={`text-[25px] font-bold lg:hidden py-[4px]  `}>
							{isOpen ? <FiX /> : <FiMenu />}
						</button>
					</div>
					<div></div>
					<div className="px-10 py-2 ">
						<nav
							className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
								isOpen ? "max-h-[999px] pt-[20px]" : "max-h-0 pt-0"
							}  flex flex-col px-[20px] space-y-3 text-lg font-sans font-semibold ${
								isScrolled ? "text-gray-700" : "text-white"
							}`}>
							<Link className="hover:text-gray-500" to={"/"}>
								Home
							</Link>
							<Link className="hover:text-gray-500" to={"/about"}>
								About
							</Link>
							<Link className="hover:text-gray-500" to={"/services"}>
								Services
							</Link>
							<Link className="hover:text-gray-500" to={"/contact"}>
								Contact
							</Link>
						</nav>
					</div>
				</header>
			</div>
		</>
	);
}

export default Header;
