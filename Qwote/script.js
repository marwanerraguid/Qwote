const qwote = document.getElementById("qwote");
const randomBtn = document.querySelector(".btn");
const character = document.getElementById("character");
const anime = document.getElementById("anime");
const x = document.getElementById("x");

fetchData();
async function fetchData() {
	try {
		const response = await fetch("https://api.quotable.io/random");
		if (!response.ok) {
			throw new Error("Erreur de récupérations des données");
		}
		const data = await response.json();
		qwote.textContent = data.content;
		character.textContent = data.author;
		anime.textContent = data.anime;
	} catch (error) {
		console.log(error);
	}
}
randomBtn.addEventListener("click", () => {
	fetchData();
});

x.addEventListener("click", () => {
	const quote = encodeURIComponent(qwote.textContent);
	const characterName = encodeURIComponent(character.textContent);
	const animeName = encodeURIComponent(anime.textContent);
	const xUrl = `https://twitter.com/intent/tweet?text=${quote} - ${characterName} from ${animeName}`;
	window.open(xUrl, "_blank");
});
