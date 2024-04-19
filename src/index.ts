import * as components from './components/indexPadre';
import Film, { AttributesFilm } from './components/Film/Film';
import { AttributesPeople } from './components/People/People';
import { getFilms } from './data/dataFetchFilms';

class AppContainer extends HTMLElement {
	Films: Film[] = []; //un arreglo

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const dataFilms = await getFilms();
		console.log(dataFilms);
		this.render(dataFilms);
	}

	render(dataFilms: any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
<film-card></film-card>
`;

			dataFilms.forEach((datafilm: any) => {
				//el tipado es de tipo Film osea el componente
				const cardFilm = this.ownerDocument.createElement('film-card') as Film; // 'film' es mi etiqueta
				cardFilm.setAttribute(AttributesFilm.utitle, datafilm.title);
				cardFilm.setAttribute(AttributesFilm.original_title, datafilm.original_title);
				cardFilm.setAttribute(AttributesFilm.director, datafilm.director);
				cardFilm.setAttribute(AttributesFilm.release_date, datafilm.release_date);
				cardFilm.setAttribute(AttributesFilm.description, datafilm.description);
				this.shadowRoot?.appendChild(cardFilm);
			});

			console.log(this.Films);

			//this.Films.forEach((films)=>)
			//<film
			//utitle='${data.title}'
			//original_title='${data.original_title}'
			//director='${data.director}'
			//	description='${data.description}'
			//		release_date='${data.release_date}'
			//	</film>
		}
	}
}

customElements.define('app-container', AppContainer);
