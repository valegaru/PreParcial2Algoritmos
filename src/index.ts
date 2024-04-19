import './components/indexPadre';
import { AttributesFilm } from './components/Film/Film';
import { AttributesPeople } from './components/People/People';
import { getFilms } from './data/dataFetchFilms';

class AppContainer extends HTMLElement {
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
			this.shadowRoot.innerHTML = `
			<film
			utitle='${dataFilms.title}'
			original_title='${dataFilms.original_title}'
			director='${dataFilms.director}'
			description='${dataFilms.description}'
			release_date='${dataFilms.release_date}'
	</film>
`;
		}
	}
}

customElements.define('app-container', AppContainer);
