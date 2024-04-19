import styles from './People.css';

export enum AttributesPeople {
	'name' = 'name',
	'gender' = 'gender',
}

class People extends HTMLElement {
	name?: string;
	gender?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	static get observedAttributes() {
		const attrs: Record<AttributesPeople, null> = {
			name: null,
			gender: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributesPeople, oldValue: string | undefined, newValue: string | undefined) {
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
			this.shadowRoot.innerHTML = `
<b><p>${this.name}</p></b>
<p>${this.gender}</p>
`;
		}
	}
}

customElements.define('people', People);
export default People;
