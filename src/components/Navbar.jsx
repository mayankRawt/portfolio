import logo from "../assets/AakashSagarLogo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { LINKS } from "../constants";
export const handleClick = (link) => {
	window.open(link, "_blank");
};

const Navbar = () => {
	return (
		<nav className=" mb-20 flex items-center justify-between py-6 lg:px-8">
			<div className="flex flex-shrink-0 items-center">
				<img className="w-25" src={logo} alt="Logo" />
			</div>
			<div className="lg:mr-8 flex justify-center items-center gap-4 text-3xl">
				<FaLinkedin
					className="cursor-pointer text-white hover:text-cyan-300 transition"
					onClick={() => handleClick(LINKS.linkedIn)}
				/>
				<FaGithub
					className="cursor-pointer text-white hover:text-cyan-300 transition"
					onClick={() => handleClick(LINKS.github)}
				/>
				<FaCode
					className="cursor-pointer text-white hover:text-cyan-300 transition"
					onClick={() => handleClick(LINKS.leetcode)}
				/>
				<FaInstagram
					className="cursor-pointer text-white hover:text-cyan-300 transition"
					onClick={() => handleClick(LINKS.instagram)}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
