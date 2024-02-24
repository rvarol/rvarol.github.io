import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './ProjectDetail.scss';

export default function Project_HeartFailure(props: { handleClick: (label: string) => void }) {
    return <>
        <div className="project_detail_header">
            <span className="project_detail_title">Detection of heart failure risk from effort test results</span>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => props.handleClick('')} />
        </div>
    </>
}