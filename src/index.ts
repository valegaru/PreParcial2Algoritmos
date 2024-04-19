import './components/indexPadre';
import { AttributesFilm } from './components/Film/Film';
import { AttributesPeople } from './components/People/People';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
<film></film>
<people></people>
`;
		}
	}
}

customElements.define('app-container', AppContainer);
