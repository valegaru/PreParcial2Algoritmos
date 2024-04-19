import styles from './Film.css';

export enum AttributesFilm {
	//'btn_favorite' = 'btn_favorite',
	'utitle' = 'utitle',
	'original_title' = 'original_title',
	'release_date' = 'release_date',
	'description' = 'description',
	'director' = 'director',
	//'btn_people' = 'btn_people',
}

class Film extends HTMLElement {
	//btn_favorite?: string;
	utitle?: string;
	original_title?: string;
	release_date?: string;
	description?: string;
	director?: string;
	//	btn_people?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	static get observedAttributes() {
		const attrs: Record<AttributesFilm, null> = {
			//btn_favorite: null,
			utitle: null,
			original_title: null,
			release_date: null,
			description: null,
			director: null,
			//	btn_people: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributesFilm, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
<h1>${this.utitle}</h1>
<h2>${this.original_title}</h2>
<b><p>${this.release_date}</p></b>
<b><p>${this.director}</p></b>
<p>${this.description}</p>

`;
			//<button>${this.btn_favorite || 'add to favorites'}</button>
			//<button>${this.btn_people || 'show people'}</button>;
		}
	}
}

customElements.define('film-card', Film);
export default Film;
