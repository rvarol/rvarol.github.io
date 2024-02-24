import experiences from '../../static/content/experience.json';
import './Experience.scss';

import BW_Logo from '../../static/images/experience_logo/bw_logo.png';
import BiaTech_Logo from '../../static/images/experience_logo/biatech_logo.png';
import TAA_Logo from '../../static/images/experience_logo/taa_logo.png';

type ExperienceInfo = {
  logo_url: string,
  position: string,
  company: string,
  time_span: string,
  location: string,
  items: string[],
  expanded_items: string[]
}

type ExperiencePanelProps = {
  item: ExperienceInfo,
}

export default function Experience() {
  return <>
    <div className='main-panel-container'>
      <h2>WORK EXPERIENCE</h2>
      {
        experiences.experiences.map((experience, index) =>
          <ExperiencePanel key={index} item={experience} />)
      }
    </div>
  </>
}

function ExperiencePanel(props: ExperiencePanelProps) {
  const image = require('../../static/images/experience_logo/' + props.item.logo_url);

  return <>
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-content-start">
          <img src={image}
            alt="Bundeswehr University Munich"
            loading="lazy" />
          <div>
            <div className="section-subheading card-title exp-title text-muted my-0">
              {props.item.position}
            </div>

            <div className="section-subheading card-title exp-company text-muted my-0">
              {props.item.company}
            </div>

            <div className="text-muted exp-meta">
              {props.item.time_span}
              <span className="middot-divider"></span>
              <span>{props.item.location}</span>
            </div>
          </div>
        </div>

        <div className="card-text">
          <ul>
            {
              props.item.items.map((exp, index) => {
                return <li key={index}>{exp}</li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  </>
}