import { motion } from "motion/react";
import { EDUCATION } from "../constants";

const Education = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="text-4xl text-center my-20"
			>
				Education
			</motion.h2>
			<div>
				{EDUCATION.map((exp, index) => (
					<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="w-full lg:w-1/4"
						>
							<p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className="w-full max-w-xl lg:w-3/4"
						>
							<h6 className="mb-2 font-semibold">
								{exp.course} -{" "}
								<span className="text-sm text-purple-100">{exp.college}</span>
							</h6>
							<p className="mb-4 text-neutral-400">Grade: {exp.grades}</p>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Education;
