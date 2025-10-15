export const getRandomSong = () => {
    const rand = Math.ceil(Math.random() * 3) ;
	return new URL(`../assets/Music/Song${rand}.mp3`, import.meta.url)
		.href;
};
