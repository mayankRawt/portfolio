import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { getRandomSong } from "./constants/utility";

function App() {

  useEffect(() => {
		const audio = new Audio(getRandomSong());
		audio.loop = true;
    audio.volume = .1;

		const playAudio = () => {
			audio.play().catch((e) => console.error("Audio playback failed: ", e));
			document.removeEventListener("click", playAudio);
		};

		document.addEventListener("click", playAudio);

		return () => {
			audio.pause();
			document.removeEventListener("click", playAudio);
		};
	}, []);


  return (
		<div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 h-full">
			{/* Radial Gradient Layer */}
			<div className="fixed top-0 -z-10 h-full w-full">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff1a,#000)]"></div>
			</div>
		
			{/* Content */}
			<div className="container mx-auto px-8">
				<Navbar />
				<Hero />
				<About />
				<Education />
				<Experience />
				<Technologies />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}

export default App;

