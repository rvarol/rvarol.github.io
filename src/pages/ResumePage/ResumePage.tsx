import CustomIcon from "../../icons";
import "./ResumePage.scss";

import { ExperienceData, SkillsData, EducationData } from "../../data/data";

export function ResumePage() {
    const TimelineItem = (props: {
        name: string;
        years: string;
        descriptions: string[];
    }) => {
        return (
            <li className="timeline-item">
                <h4 className="h4 timeline-item-title">{props.name}</h4>
                <span>{props.years}</span>
                <div className="timeline-text">
                    {props.descriptions.map((item) => (
                        <p>{item}</p>
                    ))}
                </div>
            </li>
        );
    };

    const SkillItem = (props: {
        title: string;
        starCount: number;
        icon: string;
    }) => {
        return (
            <li className="experience-item items-center">
                <div className="experience-icon-box">
                    <img src={props.icon} width="40" />
                </div>

                <div className="experience-content-box flex-grow">
                    <h4 className="h4 service-item-title">{props.title}</h4>
                    <p className="experience-item-text">
                        {"★ ".repeat(props.starCount) +
                            "☆ ".repeat(5 - props.starCount)}
                    </p>
                </div>

                <div className="block bg-white bg-opacity-5 px-3 py-2 align-right rounded-[5px] text-sm text-gray-400">
                    <p>Details</p>
                </div>
            </li>
        );
    };

    return (
        <>
            <article className="resume" data-page="resume">
                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>

                <section className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <CustomIcon icon="education" />
                        </div>
                        <h3 className="h3">Education</h3>
                    </div>
                    <ol id="education-timeline" className="timeline-list">
                        {EducationData.map((item, index) => (
                            <TimelineItem
                                key={index}
                                name={item.name}
                                years={item.years}
                                descriptions={item.description}
                            />
                        ))}
                    </ol>
                </section>

                <section className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <CustomIcon icon="experience" />
                        </div>
                        <h3 className="h3">Experience</h3>
                    </div>
                    <ol id="experience-timeline" className="timeline-list">
                        {ExperienceData.map((item, index) => (
                            <TimelineItem
                                key={index}
                                name={item.name}
                                years={item.years}
                                descriptions={item.description}
                            />
                        ))}
                    </ol>
                </section>

                <section className="skill">
                    <h3 className="h3 skills-title">Skills</h3>
                    <ul className="experience-list">
                        {SkillsData.map((item, index) => (
                            <SkillItem
                                key={index}
                                title={item.title}
                                starCount={item.starCount}
                                icon={item.icon}
                            />
                        ))}
                    </ul>
                </section>
            </article>
        </>
    );
}
