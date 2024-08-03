import { PublicationData } from "../../data/data";
import "./PublicationsPage.scss";

export function PublicationsPage() {
    const PublicationItem = (props: {
        description: string;
        link: string;
        journal: string;
        datetime: string;
        image: string;
        title: string;
    }) => {
        return (
            <li className="blog-post-item">
                <a href={props.link}>
                    <figure className="blog-banner-box">
                        <img src={props.image} loading="lazy" />
                    </figure>

                    <div className="blog-content">
                        <div className="blog-meta">
                            <p className="blog-category">{props.journal}</p>
                            <span className="dot"></span>
                            <p className="blog-category">{props.datetime}</p>
                        </div>

                        <h4 className="h4 blog-item-title">{props.title}</h4>
                        <p className="blog-text">{props.description}</p>
                    </div>
                </a>
            </li>
        );
    };
    return (
        <>
            <article className="publications" data-page="publications">
                <header>
                    <h2 className="h2 article-title">Publications</h2>
                </header>

                <section className="blog-posts">
                    <ul className="blog-posts-list">
                        {PublicationData.map((item, index) => (
                            <PublicationItem
                                key={index}
                                description={item.description}
                                link={item.link}
                                journal={item.journal}
                                datetime={item.datetime}
                                image={item.image}
                                title={item.title}
                            />
                        ))}
                    </ul>
                </section>
            </article>
        </>
    );
}
