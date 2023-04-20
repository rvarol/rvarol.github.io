import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './ProjectDetail.scss';

export default function Project_AcoustoHolography(props: { handleClick: (label: string) => void }) {
  return <>
    <div className="project_detail_header">
      <span className="project_detail_title">Cell stiffness measurement using a acousto-holographic microscope</span>
      <FontAwesomeIcon icon={faArrowLeft} onClick={() => props.handleClick('')} />
    </div>
  </>
}