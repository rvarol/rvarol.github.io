import './Experience.scss';

import BW_Logo from '../../static/images/experience_logo/bw_logo.png';
import BiaTech_Logo from '../../static/images/experience_logo/biatech_logo.png';
import TAA_Logo from '../../static/images/experience_logo/taa_logo.png';

type ExperienceInfo = {
  logo_url: string,
  position: string,
  company: string,
  date_range: string,
  location: string,
  bullet_points: string[]
}

type ExperiencePanelProps = {
  item: ExperienceInfo,
}

export default function Experience() {
  const experience_info1 = {
    logo_url: BW_Logo,
    position: 'Software Engineer',
    company: 'Universität der Bundeswehr München',
    date_range: 'February 2021 – Present',
    location: 'Munich, Germany',
    bullet_points: [
      'Development of 3D feature extraction, cellular segmentation and real-time cell tracking algorithms for 3D point clouds',
      'Development of a web-based user interface for 3D data visualization', 
      'Development of virtual staining tools for better visualization of 3D point clouds',
    ]
  }
  const experience_info2 = {
    logo_url: BiaTech_Logo,
    position: 'Software Engineer',
    company: 'BiaTech Medical Devices',
    date_range: 'February 2021 – Present',
    location: 'Istanbul Turkey',
    bullet_points: [
      'Development of a Programmable Logic Controller (PLC) and associated electrical control unit',
      'Development of a control user interface',
      'Medical CE certification, IEC 62304 certification and ISO 13485 certification',
    ]
  }
  const experience_info3 = {
    logo_url: TAA_Logo,
    position: 'Software Engineer',
    company: 'Turksih Airlines Aviation Academy',
    date_range: 'February 2021 – Present',
    location: 'Istanbul, Turkey',
    bullet_points: [
      'Development of 3D visualization software for flight training courses in Unity',
    ]
  }
  return <>
    <div className='main-panel-container'>
      <h2>WORK EXPERIENCE</h2>
      <ExperiencePanel item={experience_info1} />
      <ExperiencePanel item={experience_info2} />
      <ExperiencePanel item={experience_info3} />
    </div>
  </>
}

function ExperiencePanel(props: ExperiencePanelProps) {
  return <>  
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-content-start">
              <img src={props.item.logo_url}
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
                  {props.item.date_range}
                  <span className="middot-divider"></span>
                  <span>{props.item.location}</span>
                </div>
              </div>
            </div>

            <div className="card-text">
              <ul>
                {
                  props.item.bullet_points.map((exp, index) => {
                    return <li>{exp}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
  </>
}