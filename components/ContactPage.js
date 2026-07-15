export class ContactPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: "open"});

        const styles = document.createElement("style");
        this.root.appendChild(styles);

        async function loadCSS() {
            const request = await fetch("/components/AboutPage.css");
            const css = await request.text();
            styles.textContent = css;
        }
        loadCSS();
    }

    connectedCallback() {
        const template = document.getElementById("contact-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        this.render();
    }

    render() {
    }
}

customElements.define("contact-page", ContactPage);