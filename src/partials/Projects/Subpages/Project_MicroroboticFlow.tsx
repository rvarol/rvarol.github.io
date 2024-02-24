import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './ProjectDetail.scss';

export default function Project_MicroroboticFlow(props: { handleClick: (label: string) => void }) {
    return <>
        <div className="project_detail_header">
            <span className="project_detail_title">Development of a microrobotic platform for high-rate flow environments</span>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => props.handleClick('')} />
        </div>
    </>
}