import project1 from "../assets/projects/YelpCamp.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/Portfolio.jpg";
import project4 from "../assets/projects/Cat-Dog-CNN.jpg";
import project5 from "../assets/projects/MystiPlay.png";
import project6 from "../assets/projects/Pokemon_App.jpg";

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const HERO_CONTENT = `I'm a full stack developer passionate about building performant, user-focused web applications. With hands-on experience in the MERN stack, I've developed scalable platforms like YelpCamp and a secure authentication app. My strengths lie in building dynamic frontends with React.js and managing robust backends with Node.js and Express, integrated with databases like MongoDB, MySQL, and Firebase. I enjoy crafting seamless user experiences that solve real-world problems and contribute to business success.`;

export const ABOUT_TEXT = `I’m a curious and adaptable full stack developer who loves turning ideas into functional, clean, and impactful web apps. My expertise spans React.js, Redux, TypeScript, Node.js, Express, and database solutions like MongoDB and Firebase. I’ve worked on diverse projects—from building a full-stack campground review app (YelpCamp) to designing a CNN-based image classifier and a fully interactive Pokémon app. I enjoy collaborative problem-solving and continuously explore new tools and technologies. When I’m not coding, you’ll find me diving into music, writing lyrics, or playing the guitar.`;

export const EXPERIENCES = [
	{
		year: "June 2023 - November 2023",
		role: "Full Stack Developer Intern",
		company: "MangosOrange Services Pvt. Ltd.",
		description: `Researched and documented the design of an e-learning platform, improving user experience by integrating government schemes. Worked with the MERN stack, implementing frontend components using React.js and designing RESTful APIs with Express.js. Improved content structure for better readability and organization. Utilized MongoDB for database structuring, GitHub for version control, and Figma for prototyping.`,
		technologies: [
			"JavaScript",
			"MongoDB",
			"Express.js",
			"React.js",
			"Node.js",
			"Figma",
		],
	},
	//    SAMPLE DATA

	// {
	//   year: "2023 - Present",
	//   role: "Senior Full Stack Developer",
	//   company: "Google Inc.",
	//   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
	//   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
	// },
	// {
	//   year: "2022 - 2023",
	//   role: "Frontend Developer",
	//   company: "Adobe",
	//   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
	//   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
	// },
	// {
	//   year: "2021 - 2022",
	//   role: "Full Stack Developer",
	//   company: "Facebook",
	//   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
	//   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
	// },
	// {
	//   year: "2020 - 2021",
	//   role: "Software Engineer",
	//   company: "Paypal",
	//   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
	//   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
	// },
];

export const PROJECTS = [
	{
		title: "YelpCamp",
		image: project1,
		description:
			"Engineered a dynamic full-stack web application for browsing, adding, and reviewing campgrounds using Node.js, Express, MongoDB, and EJS. Implemented robust user authentication with Passport.js and integrated Cloudinary for image uploads and MapTiler API for mapping locations.",
		technologies: [
			"Node.js",
			"Express",
			"MongoDB",
			"EJS",
			"Passport.js",
			"Cloudinary",
			"MapTiler",
		],
		link: "https://yelpcamp-8uao.onrender.com/",
	},
	{
		title: "Auth App",
		image: project2,
		description:
			"Developed an Android-based authentication app with Java and XML, using Firebase for backend functionality. Designed an intuitive interface with nine interactive screens for user registration, login, and data validation.",
		technologies: ["Java", "XML", "Firebase"],
		link: "https://github.com/MysticAakash07/Auth-App",
	},
	{
		title: "MystiPlay (Spotify Clone)",
		image: project5,
		description:
			"A dynamic Spotify clone built with React and Spotify Web API. Supports real-time playback with Spotify Web Playback SDK, mobile responsiveness, playlist saving, artist and album views, and custom controls including shuffle, repeat, and liking songs.",
		technologies: [
			"React",
			"Spotify API",
			"Styled Components",
			"OAuth",
			"Web Playback SDK",
		],
		link: "https://mystiplay.vercel.app/",
	},
	{
		title: "Portfolio Website",
		image: project3,
		description:
			"Created a responsive portfolio site using React and Tailwind CSS. Implemented smooth animations with Framer Motion to enhance user experience and visual appeal.",
		technologies: ["React", "Tailwind CSS", "Javascript", "Framer Motion"],
		link: "https://portfolioaakash.vercel.app/",
	},

	{
		title: "Cat-Dog Image Classifier",
		image: project4,
		description:
			"Constructed a machine learning model using TensorFlow and Keras to differentiate between cat and dog images, achieving 73% accuracy. Integrated with a Streamlit web app for easy user interaction.",
		technologies: ["TensorFlow", "Keras", "Streamlit"],
		link: "https://huggingface.co/spaces/Mystic-Aakash/Cat-Dog-Image-Classifier-using-CNN",
	},
	{
		title: "Pokemon App",
		image: project6,
		description:
			"A feature-rich Pokédex built using React, Redux, and Firebase. Users can search for Pokémon, view detailed stats and abilities, compare different Pokémon side-by-side, and create custom saved lists stored in Firebase. Styled using modular SCSS for a clean and responsive UI.",
		technologies: ["React", "Firebase", "Redux", "SCSS"],
		link: "https://pokedex-aakash.netlify.app/",
	},

	//    SAMPLE DATA
	// {
	//   title: "E-Commerce Website",
	//   image: project1,
	//   description:
	//     "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
	//   technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
	// },
	// {
	//   title: "Task Management App",
	//   image: project2,
	//   description:
	//     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
	//   technologies: ["HTML", "CSS", "Angular", "Firebase"],
	// },
	// {
	//   title: "Portfolio Website",
	//   image: project3,
	//   description:
	//     "A personal portfolio website showcasing projects, skills, and contact information.",
	//   technologies: ["HTML", "CSS", "React", "Bootstrap"],
	// },
	// {
	//   title: "Blogging Platform",
	//   image: project4,
	//   description:
	//     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
	//   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
	// },
];

export const CONTACT = {
	address: "Sector 58, Noida, Uttar Pradesh, 201307",
	phoneNo: "+91 955-770-9671 ",
	email: "rahulsagar460@gmail.com",
};

export const LINKS = {
	linkedIn: "https://www.linkedin.com/in/mysticaakash/",
	github: "https://github.com/MysticAakash07",
	leetcode: "https://leetcode.com/u/Mystic_Aakash/",
	instagram: "https://www.instagram.com/mystic_aakash/",
};

export const EDUCATION = [
	{
		year: "September 2022 - July 2024",
		course: "MCA (Master of Computer Applications)",
		college: "Graphic Era Hill University, Bhimtal",
		grades: "8.95 CGPA",
	},
	{
		year: "August 2019 - July 2022",
		course: "BCA (Bachelor of Computer Applications)",
		college: "Kumaun University, Nainital",
		grades: "74.03%",
	},
];
