import CustomIcon from "../icons";
import "./Sidebar.scss";
import RVImage from "/images/rv.png";

export default function Sidebar() {
    const SidebarElement = (props: {
        icon: string;
        link: string;
        title: string;
        content: string;
    }) => (
        <>
            <li className="contact-item">
                <div className="icon-box">
                    <CustomIcon icon={props.icon} size="medium" />
                </div>
                <div className="contact-info">
                    <p className="contact-title">{props.title}</p>
                    <a href={props.link} className="contact-link">
                        {props.content}
                    </a>
                </div>
            </li>
        </>
    );
    return (
        <>
            <aside className="sidebar" data-sidebar>
                <div className="sidebar-info">
                    <figure className="avatar-box">
                        <img src={RVImage} alt="Rahmetullah Varol" width="80" />
                    </figure>

                    <div className="info-content">
                        <h1 className="name" title="Rahmetullah">
                            Rahmetullah
                        </h1>
                        <h1 className="surname" title="Varol">
                            Varol
                        </h1>

                        <p className="title">
                            Machine Learning
                            <br />
                            Engineer
                        </p>
                    </div>

                    <button className="info_more-btn" data-sidebar-btn>
                        <span>Show Contacts</span>
                        <CustomIcon icon="chevron-down" color="" />
                    </button>
                </div>

                <div className="sidebar-info_more">
                    <div className="separator"></div>
                    <ul className="contacts-list">
                        <SidebarElement
                            icon="mail"
                            link="mailto:rahmet@gmail.com"
                            title="Email"
                            content="rahmet@gmail.com"
                        />
                        <SidebarElement
                            icon="calendar"
                            link="#"
                            title="Birthday"
                            content="July 27, 1993"
                        />
                        <SidebarElement
                            icon="location"
                            link="#"
                            title="Location"
                            content="Munich, DE"
                        />
                    </ul>
                    <div className="separator"></div>

                    <ul className="social-list">
                        <li className="social-item">
                            <a
                                href="https://www.linkedin.com/in/rvarol/"
                                className="social-link"
                            >
                                <CustomIcon
                                    icon="linkedin"
                                    size="small"
                                    color="#CCC"
                                />
                            </a>
                        </li>
                        <li className="social-item">
                            <a
                                href="https://github.com/rvarol"
                                className="social-link"
                            >
                                <CustomIcon
                                    icon="github"
                                    size="small"
                                    color="#CCC"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
