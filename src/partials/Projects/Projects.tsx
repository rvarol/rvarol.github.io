import './Projects.scss'
import { ProjectItem } from '../../types'

import Project1_Thumbnail from '../../static/images/project_thumbs/project1.png'

function Projects() {
  const test_item = {
    title: 'Cell Stiffness Measurement with Acousto-Holographic Microscope',
    description: 'In this project we developed an acousto-optical methodology for measuring the 2D stiffness distribution over a cell membrane.',
    image_url: Project1_Thumbnail,
  }

  return <>
    <div className='main-panel-container'>
      <h2>PROJECTS</h2>
      <ProjectItemPanel item={test_item}/>
    </div>
  </>
}

function ProjectItemPanel(props: { item: ProjectItem }) {
  return <>
    <div className="card">
      <div className="card-body">

        {/* PROJECT IMAGE */}
        <div className="portfolio__image-wrapper">
          <a href="{{ .link | safeURL }}" target="_blank" rel="noopener">
            <img className="portfolio__image" 
                  src={props.item.image_url} 
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

export default Projects;