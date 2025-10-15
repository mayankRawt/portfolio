import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Mayank2.jpeg";
import { motion } from "motion/react";

const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
});

const Hero = () => {
	return (
		<div className="border-b border-neutral-900 pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2 lg:px-8">
					<div className="flex flex-col items-center lg:items-start">
						<motion.h1
							variants={container(0.2)}
							initial="hidden"
							animate="visible"
							className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
						>
							Mayank Rawat
						</motion.h1>
						<motion.span
							variants={container(0.4)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-pink-300 via-slate-500  to-purple-500  bg-clip-text text-4xl tracking-tight text-transparent"
						>
							Content Creator
						</motion.span>
						<motion.p
							variants={container(0.6)}
							initial="hidden"
							animate="visible"
							className="my-2 max-w-xl py-6 font-light"
						>
							{HERO_CONTENT}
						</motion.p>
					</div>
				</div>
				<div className="w-full lg:w-1/2 lg:p-8">
					<div className="flex justify-center">
						<motion.img
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							src={profilePic}
							className="rounded-2xl"
							width={500}
							height={500}
							alt="Aakash Sagar Profile Picture"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
