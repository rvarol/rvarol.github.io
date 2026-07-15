export class ProjectsPage extends HTMLElement {
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
        const template = document.getElementById("projects-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        this.render();
    }

    render() {
        for (let i in app.store.projectsPageData.projects) {
            const template = document.getElementById("project-item-template");
            const content = template.content.cloneNode(true);

            content.querySelector("img").setAttribute("src", app.store.projectsPageData.projects[i].image);
            content.querySelector(".project-title").textContent = app.store.projectsPageData.projects[i].projectTitle;
            content.querySelector(".project-category").textContent = app.store.projectsPageData.projects[i].projectCategory;

            content.querySelector(".project-item").addEventListener("click", function() {
                const modalTemplate = document.getElementById("project-modal-template");
                const modalContent = modalTemplate.content.cloneNode(true);
                const modalElement = document.querySelector(".testimonials-modal .modal-content");
                const modalContainer = document.querySelector("[data-modal-container]");

                app.modalController.showModal();

                modalElement.innerHTML = "";
                modalElement.appendChild(modalContent);

                modalContainer.querySelector("p").textContent = app.store.projectsPageData.projects[i].text;
                modalContainer.querySelector(".modal-avatar-box img").setAttribute("src", app.store.projectsPageData.projects[i].minilogo);

                modalContainer.querySelector(".clients-list").innerHTML = "";
                app.store.projectsPageData.projects[i].photos.forEach(photo => {
                    modalContainer.querySelector(".clients-list").innerHTML += 
                        '<li class="clients-item"><a href="#"><img src=' + photo + ' alt="client logo"/></a></li>';
                });
                modalContainer.querySelectorAll(".clients-item").forEach(item => {
                    item.addEventListener("click", () => app.modalController.showGalleryModal());
                });
            });

            this.root.querySelector(".project-list").appendChild(content);
        }

        // custom select variables
        const select = this.root.querySelector("[data-select]");
        const selectItems = document.querySelectorAll("[data-select-item]");
        const selectValue = document.querySelector("[data-selecct-value]");
        const filterBtn = document.querySelectorAll("[data-filter-btn]");

        select.addEventListener("click", function () { elementToggleFunc(this); });
        for (let i = 0; i < selectItems.length; i++) {
            selectItems[i].addEventListener("click", function () {
                let selectedValue = this.innerText.toLowerCase();
                selectValue.innerText = this.innerText;
                elementToggleFunc(select);
                filterFunc(selectedValue);
            });
        }
    }
}

customElements.define("projects-page", ProjectsPage);