import { RiReactjsLine } from "react-icons/ri";
import {
	SiMongodb,
	SiTypescript,
	SiPython,
	SiCplusplus,
	SiTailwindcss,
	SiTensorflow,
	SiKeras,
	SiFirebase,
	SiExpress,
	SiMysql,
	SiGit,
} from "react-icons/si";
import { FaNodeJs, FaJava, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

const Technologies = () => {
	return (
		<div className="border-b border-neutral-800 pb-24">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
				className="my-20 text-center text-4xl"
			>
				Technologies
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className="flex flex-wrap items-center justify-center gap-4"
			>
				{/* React */}
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />
				</motion.div>

				{/* Node.js */}
				<motion.div
					variants={iconVariants(3)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<FaNodeJs className="text-4xl lg:text-6xl text-green-500" />
				</motion.div>
				{/* MongoDB */}
				<motion.div
					variants={iconVariants(1.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<SiMongodb className="text-4xl lg:text-6xl text-green-500" />
				</motion.div>
				{/* Express */}
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<SiExpress className="text-4xl lg:text-6xl text-white" />
				</motion.div>

				{/* TypeScript */}
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<SiTypescript className="text-4xl lg:text-6xl text-blue-500" />
				</motion.div>
				{/* C++ */}
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<SiCplusplus className="text-4xl lg:text-6xl text-blue-700" />
				</motion.div>
				{/* Python */}
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<SiPython className="text-4xl lg:text-6xl text-yellow-400" />
				</motion.div>
				{/* Java */}
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<FaJava className="text-4xl lg:text-6xl text-red-600" />
				</motion.div>

				{/* Firebase */}
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<SiFirebase className="text-4xl lg:text-6xl text-yellow-400" />
				</motion.div>
				{/* MySQL */}
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<SiMysql className="text-4xl lg:text-6xl text-blue-500" />
				</motion.div>
				{/* TensorFlow */}
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<SiTensorflow className="text-4xl lg:text-6xl text-orange-500" />
				</motion.div>
				{/* Keras */}
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<SiKeras className="text-4xl lg:text-6xl text-red-600" />
				</motion.div>
				{/* Git */}
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<SiGit className="text-4xl lg:text-6xl text-red-500" />
				</motion.div>
				{/* GitHub */}
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<FaGithub className="text-4xl lg:text-6xl text-white" />
				</motion.div>
				{/* Tailwind */}
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-500 p-4"
				>
					<SiTailwindcss className="text-4xl lg:text-6xl text-blue-400" />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Technologies;
