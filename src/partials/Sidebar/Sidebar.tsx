import { useState } from 'react';
import './Sidebar.scss'

import ProfilePicture from '../../static/images/rv.png';
import { SidebarProps } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faScroll, faAward, faContactBook } from '@fortawesome/free-solid-svg-icons';

function Sidebar(props: SidebarProps) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return <>
    <div className="sidebar animated fadeInDown">
      <div className="sidebar__content">
        <div className="sidebar__introduction">
          <img className="sidebar__introduction-profileimage"
            src={ProfilePicture}
            alt="profile" />
          <h1 className="sidebar__introduction-title">
            <a href="/">Rahmetullah Varol</a>
          </h1>
          <div className="sidebar__introduction-description">
            <p>Personal CV and portfolio</p>
          </div>

          <div id="sidebar-summary">
            I am a Research Assistant at Bundeswehr University Munich. I am working on computer vision and deep generative networks for single cell analysis. I obtained my Master and Bachelor degree in Mechatronics Engineering from Yildiz Techinal University (YTU) under supervision of Prof. Huseyin Uvet.
          </div>
        </div>
        <ul className="sidebar__list">
          <SocialIcon />
        </ul>

        <ul className="sidebar__navigation-bar">
          <li className={activeTabIndex === 0 ? 'active' : ''}
            onClick={() => {
              props.tabChangeHandler('projects');
              setActiveTabIndex(0);
            }}>
            <FontAwesomeIcon icon={faRocket} />
            Projects
          </li>

          <li className={activeTabIndex === 1 ? 'active' : ''}
            onClick={() => {
              props.tabChangeHandler('publications');
              setActiveTabIndex(1);
            }}>
            <FontAwesomeIcon icon={faScroll} />
            Publications
          </li>

          <li className={activeTabIndex === 2 ? 'active' : ''}
            onClick={() => {
              props.tabChangeHandler('experience');
              setActiveTabIndex(2);
            }}>
            <FontAwesomeIcon icon={faAward} />
            Experience
          </li>

          <li className={activeTabIndex === 3 ? 'active' : ''}
            onClick={() => {
              props.tabChangeHandler('contact');
              setActiveTabIndex(3);
            }}>
            <FontAwesomeIcon icon={faContactBook} />
            Contact
          </li>
        </ul>
      </div>

      <footer className="footer footer__{{ .footerClassModifier }}">
        <ul className="footer__list">
          <li className="footer__item">
            &copy; Rahmetullah Varol 2022
          </li>
        </ul>
      </footer>
    </div>
  </>
}

function SocialIcon() {
  return <li className="sidebar__list-item">
    <a href="{{ $item.url }}"
      target="_blank"
      rel="noopener"
      aria-label="{{ $item.title }}"
      title="{{ $item.title }}">
      <i className="twitter fa-2x" aria-hidden="true"></i>
    </a>
  </li>
}

export default Sidebar;