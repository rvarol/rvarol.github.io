import { MouseEventHandler, useState } from 'react';
import projects from '../../static/content/projects.json';
import './Projects.scss'
import { ProjectItem } from '../../types'
import Project_AcoustoHolography from './Subpages/Project_AcoustoHolography';
import Project_HeartFailure from './Subpages/Project_HeartFailure';
import Project_OnychomycosisPlatform from './Subpages/Project_OnychomycosisPlatform';
import Project_MicroroboticFlow from './Subpages/Project_MicroroboticFlow';
import Project_MicroroboticWound from './Subpages/Project_MicroroboticWound';



function Projects() {
  const [activeProject, setActiveProject] = useState<string>("");

  function handleClick(label: string) {
    setActiveProject(label);
  }

  if (activeProject == "") {

    return <>
      <div className='main-panel-container'>
        <h2>PROJECTS</h2>
        {
          projects.projects.map((project, index) =>
            <ProjectItemPanel key={index} item={project} handleClick={handleClick} />)
        }
      </div>
    </>
  } else {
    return getProjectPage(activeProject, handleClick);
  }
}

function ProjectItemPanel(props: { item: ProjectItem, handleClick: (label: string) => void }) {
  const image = require('../../static/images/project_thumbs/' + props.item.image_url)

  return <>
    <div className="card" onClick={() => props.handleClick(props.item.label)}>
      <div className="card-body">

        {/* PROJECT IMAGE */}
        <div className="portfolio__image-wrapper">
          <a href="{{ .link | safeURL }}" target="_blank" rel="noopener">
            <img className="portfolio__image"
              src={image}
              alt="{{ .name | markdownify }}" />
          </a>
        </div>

        {/* PROJECT DESCRIPTION */}
        <div className="portfolio__description">
          <div className="portfolio__content-wrapper">
            <h2>{props.item.title}</h2>

            {/*
              <ul className="portfolio__meta">
                  <li className="portfolio__meta-item">
                    <em className="fas fa-flag-checkered"></em>
                    <span>Status</span>
                  </li>
                  
                  <li className="portfolio__meta-item">
                    <em className="fas fa-map-marker-alt"></em>
                    <span>Venue</span>
                  </li>

                  <li className="portfolio__meta-item">
                    <em className="fas fa-arrow-up"></em>
                    <span>Start</span>
                  </li>

                  <li className="portfolio__meta-item">
                    <em className="fas fa-arrow-down"></em>
                    <span>End</span>
                  </li>

                  <li className="portfolio__meta-item">
                    <em className="fas fa-at"></em>
                    <span>Authors</span>
                  </li>
              </ul>
              */}

            <p>{props.item.description}</p>

            <div className="seperator">
              <p className="tag">cell stiffness</p>
              <p className="tag">holography</p>
              <p className="tag">acoustics</p>
            </div>
          </div>

          <br className="clear-both" />
        </div>
      </div>
    </div>
  </>
}

function getProjectPage(label: string, handleClick: (label: string) => void) {
  if (label == "acousto_holography") {
    return <Project_AcoustoHolography handleClick={handleClick} />
  } else if (label == "microrobotic_wound_scratching") {
    return <Project_MicroroboticWound handleClick={handleClick} />
  } else if (label == "microrobotics_in_flow") {
    return <Project_MicroroboticFlow handleClick={handleClick} />
  } else if (label == "onychomycosis") {
    return <Project_OnychomycosisPlatform handleClick={handleClick} />
  } else if (label == "effort_test") {
    return <Project_HeartFailure handleClick={handleClick} />
  } else {
    return <>Undefined</>
  }
}

export default Projects;