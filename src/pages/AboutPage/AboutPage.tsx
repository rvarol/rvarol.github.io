import CustomIcon from "../../icons";
import "./AboutPage.scss";
import { InterestsData } from "../../data/data";

export function AboutPage() {
    const ServiceItem = (props: {
        title: string;
        text: string;
        icon: string;
    }) => {
        return (
            <li className="service-item">
                <div className="service-icon-box">
                    <CustomIcon icon={props.icon} size="large" />
                </div>

                <div className="service-content-box">
                    <h4 className="h4 service-item-title">{props.title}</h4>
                    <p className="service-item-text">{props.text}</p>
                </div>
            </li>
        );
    };
    return (
        <>
            <article className="about" data-page="about">
                <header>
                    <h2 className="h2 article-title">About me</h2>
                </header>

                <section className="about-text">
                    <p>
                        I am a Research Assistant at Bundeswehr University
                        Munich where I am working on developing imaging
                        solutions for single cell analysis using holographic
                        reconstruction and deep generative networks with a focus
                        on clinical applications.{" "}
                        <a href="biospire.ai">
                            Recently, we have been awarded 500k€ for our work on
                            predicting DNA fragmentation of sperm cells.
                        </a>
                    </p>
                    <p>
                        Previously, I worked on various projects particularly on
                        the cross-section of machine learning and healthcare.
                    </p>

                    <p>
                        I particularly enjoy working on applications which
                        combine machine learning and healthcare.
                    </p>
                </section>

                <section className="service">
                    <h3 className="h3 service-title">What I'm Doing</h3>
                    <ul className="service-list">
                        {InterestsData.map((item, index) => (
                            <ServiceItem
                                key={index}
                                title={item.title}
                                text={item.description}
                                icon={item.icon}
                            />
                        ))}
                    </ul>
                </section>
            </article>
        </>
    );
}
