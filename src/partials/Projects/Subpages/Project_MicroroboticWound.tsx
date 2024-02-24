import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './ProjectDetail.scss';

export default function Project_MicroroboticWound(props: { handleClick: (label: string) => void }) {
    return <>
        <div className="project_detail_header">
            <span className="project_detail_title">Development of a microrobotic platform for on-chip wound scratching</span>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => props.handleClick('')} />
        </div>
    </>
}