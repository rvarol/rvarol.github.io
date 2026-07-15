export class PublicationsPage extends HTMLElement {
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
        const template = document.getElementById("publications-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        this.render();
    }

    render() {
        for (let i in app.store.publicationsPageData.publications) {
            const template = document.getElementById("publication-item-template");
            const content = template.content.cloneNode(true);

            content.querySelector("a").setAttribute("href", app.store.publicationsPageData.publications[i].link);
            content.querySelector("img").setAttribute("src", app.store.publicationsPageData.publications[i].image);
            content.querySelector("time").textContent = app.store.publicationsPageData.publications[i].datetime;
            content.querySelector(".blog-category").textContent = app.store.publicationsPageData.publications[i].journal;
            content.querySelector(".blog-item-title").textContent = app.store.publicationsPageData.publications[i].title;
            content.querySelector(".blog-text").textContent = app.store.publicationsPageData.publications[i].description;

            this.root.querySelector(".blog-posts-list").appendChild(content);
        }
    }
}

customElements.define("publications-page", PublicationsPage);