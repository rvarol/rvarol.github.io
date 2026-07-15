export class AboutPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: "open"});

        const styles = document.createElement("style");
        this.root.appendChild(styles);

        async function loadCSS() {
            console.log("loading css")
            const request = await fetch("/components/AboutPage.css");
            const css = await request.text();
            styles.textContent = css;
        }
        loadCSS();
    }

    connectedCallback() {
        const template = document.getElementById("about-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        this.render();
    }

    render() {
        console.log(app.store.aboutPageData);
        for (let paragraph in app.store.aboutPageData.aboutme) {
            this.root.querySelector(".about-text").innerHTML += "<p>" + app.store.aboutPageData.aboutme[paragraph] + "</p>";
        }

        for (let i in app.store.aboutPageData.interests) {
            const template = document.getElementById("service-item-template");
            const content = template.content.cloneNode(true);

            content.querySelector("img").setAttribute("src", app.store.aboutPageData.interests[i].icon);
            content.querySelector("h4").textContent = app.store.aboutPageData.interests[i].title;
            content.querySelector("p").textContent = app.store.aboutPageData.interests[i].description;

            this.root.querySelector(".service-list").appendChild(content);
        }

        for (let i in app.store.aboutPageData.testimonials) {
            const template = document.getElementById("testimonials-item-template");
            const content = template.content.cloneNode(true);

            content.querySelector("img").setAttribute("src", app.store.aboutPageData.testimonials[i].avatar);
            content.querySelector("h4").textContent = app.store.aboutPageData.testimonials[i].name;
            content.querySelector("p").textContent = app.store.aboutPageData.testimonials[i].quote;

            this.root.querySelector(".testimonials-list").appendChild(content);
        }
        console.log("rendered");
    }
}

customElements.define("about-page", AboutPage);
