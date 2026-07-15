export class ResumePage extends HTMLElement {
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
        const template = document.getElementById("resume-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        this.render();
    }

    render() {
        for (let i in app.store.resumePageData.education) {
            const template = document.getElementById("timeline-item-template");
            const content = template.content.cloneNode(true);

            content.querySelector("h4").textContent = app.store.resumePageData.education[i].name;
            content.querySelector("span").textContent = app.store.resumePageData.education[i].years;
            //content.querySelector("p").textContent = app.store.resumePageData.education[i].description;
            console.log(app.store.resumePageData.education[i].description);
            app.store.resumePageData.education[i].description.forEach(element => {
                console.log(element);
                content.querySelector(".timeline-text").innerHTML += '<p>' + element + '</p>';
            });

            this.root.querySelector("#education-timeline").appendChild(content);
        }

        for (let i in app.store.resumePageData.experience) {
            const template = document.getElementById("timeline-item-template");
            const content = template.content.cloneNode(true);

            content.querySelector("h4").textContent = app.store.resumePageData.experience[i].name;
            content.querySelector("span").textContent = app.store.resumePageData.experience[i].years;
            console.log(app.store.resumePageData.experience[i].description);
            app.store.resumePageData.experience[i].description.forEach(element => {
                console.log(element);
                content.querySelector(".timeline-text").innerHTML += '<p>' + element + '</p>';
            });
            

            this.root.querySelector("#experience-timeline").appendChild(content);
        }

        for (let i in app.store.resumePageData.exp) {
            const template = document.getElementById("experience-item-template");
            const content = template.content.cloneNode(true);

            content.querySelector("img").setAttribute("src", app.store.resumePageData.exp[i].icon);
            content.querySelector("h4").textContent = app.store.resumePageData.exp[i].title;

            for (let j = 0; j < 5; j++) {
                if (j < app.store.resumePageData.exp[i].starCount) {
                    content.querySelector("p").innerHTML += "★";
                } else {
                    content.querySelector("p").innerHTML += "☆";
                }                
            }

            this.root.querySelector(".experience-list").appendChild(content);
        }

        /*
        for (let i in app.store.resumePageData.experience) {
            const template = document.getElementById("skills-item-template");
            const content = template.content.cloneNode(true);

            content.querySelector("h5").textContent = app.store.resumePageData.skills[i].name;
            content.querySelector("data").textContent = app.store.resumePageData.skills[i].level;
            content.querySelector(".skill-progress-fill").style.cssText += "width: " + app.store.resumePageData.skills[i].level + ";";

            this.root.querySelector("#skills-list").appendChild(content);
        }
        */
    }
}

customElements.define("resume-page", ResumePage);