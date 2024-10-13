import { ProjectData, ProjectDataType } from "../../data";
import CustomIcon from "../../icons";
import "./ProjectsPage.scss";

import ProjectDetailsModal from "../../modals/ProjectDetailsModal";
import { useState } from "react";
/*
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel";
*/
import { ArrowLeft } from "lucide-react";

export function ProjectsPage() {
    const [activeProject, setActiveProject] = useState<ProjectDataType | null>(
        null
    );

    const ProjectItem = (props: {
        title: string;
        category: string;
        image: string;
        onClick?: () => void;
    }) => {
        return (
            <li className="project-item active" onClick={props.onClick}>
                <a>
                    <figure className="project-img">
                        <div className="project-item-icon-box">
                            <ProjectDetailsModal>
                                <CustomIcon icon="eye" />
                            </ProjectDetailsModal>
                        </div>
                        <img src={props.image} alt="finance" loading="lazy" />
                    </figure>

                    <h3 className="project-title">{props.title}</h3>
                    <p className="project-category">{props.category}</p>
                </a>
            </li>
        );
    };

    const ProjectDetail = (props: { project: ProjectDataType }) => {
        return (
            <>
                <div className="h-max">
                    <div className="items-center justify-center">
                        <strong className="text-2xl">
                            {props.project.projectTitle}
                        </strong>
                        <p
                            className="float-right cursor-pointer text-3xl"
                            onClick={() => setActiveProject(null)}
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </p>
                    </div>

                    <p className="block mt-3">
                        {props.project.text}
                    </p>

                    {/*
                    <strong className="text-2xl mt-5 block">Photos</strong>

                    <Carousel className="mx-20 mt-5">
                        <CarouselContent>
                            {props.project.photos.map((photo, index) => (
                                <CarouselItem className="basis-1/3" key={index}>
                                    <img
                                        src={photo}
                                        className="h-40 float-left mr-2"
                                        alt="project"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="border-[1px] border-gray-500 text-gray-500 border-solid bg-transparent hover:bg-transparent hover:border-gray-200" />
                        <CarouselNext className="border-[1px] border-gray-500 text-gray-500 border-solid bg-transparent hover:bg-transparent hover:border-gray-200" />
                    </Carousel>
                    */}
                </div>
            </>
        );
    };

    return (
        <>
            <article className="projects" data-page="projects">
                <header>
                    <h2 className="h2 article-title">Projects</h2>
                </header>

                {activeProject ? (
                    <>
                        <ProjectDetail project={activeProject} />
                    </>
                ) : (
                    <section className="projects">
                        <ul className="project-list">
                            {ProjectData.map((project, index) => (
                                <ProjectItem
                                    key={index}
                                    title={project.projectTitle}
                                    category={project.projectCategory}
                                    image={project.image}
                                    onClick={() => setActiveProject(project)}
                                />
                            ))}
                        </ul>
                    </section>
                )}
            </article>
        </>
    );
}
