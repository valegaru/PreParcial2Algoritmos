export async function getFilms() {
	try {
		const data = await fetch('https://ghibliapi.vercel.app/films').then((res) => res.json());
		console.log(data);
		return data.results;
	} catch (error) {
		console.error('no funciona');
	}
}
