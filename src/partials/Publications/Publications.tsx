import publications from '../../static/content/publications.json';

import './Publications.scss';

import { ClipboardButtonProps, FeaturedPublication, FeaturedPublicationPanelProps } from '../../types';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Publications() {
  return <>
    <div className='main-panel-container'>
      <h2>FEATURED PUBLICATIONS</h2>

      {
        publications.publications.map((pub, index) =>
          <FeaturedPublicationPanel key={index} publication={pub} />)
      }
    </div>
  </>
}

function FeaturedPublicationPanel(props: FeaturedPublicationPanelProps) {
  const image = require('../../static/images/publication_images/' + props.publication.image_url)

  if (props.publication.listed) {
    return <>
      <div className="card">
        <div className="card-body">
          <a href={props.publication.link} >
            <div className="img-hover-zoom">
              <img src={image}
                className="article-banner"
                alt={props.publication.journal}
                loading="lazy" />
            </div>
          </a>

          <br />

          <div className="author-list-section">
            {
              props.publication.authors.map((author, index) => {
                if (index !== props.publication.authors.length - 1) {
                  return <span key={index}>{author}, </span>
                } else {
                  return <span key={index}>{author}</span>
                }
              })
            }
          </div>

          <br />

          <span className="article-date">{props.publication.date}</span>
          <span className="middot-divider"></span>
          <span className="pub-publication">In <a href={props.publication.journal_link}><em>{props.publication.journal}</em></a></span>

          <div className="section-subheading article-title mb-1 mt-3">
            <a href={props.publication.link} >{props.publication.title}</a>
          </div>

          <div className="article-abstract">
            <p>{props.publication.abstract}</p>
          </div>

          <br />

          <div className="clipboard-buttons btn-links">
            {/*
          <a href="#" 
            className="btn btn-outline-primary btn-page-header btn-sm js-cite-modal"
            data-filename="/publication/cad/cite.bib">
            Cite
          </a>
          */}
            <ClipboardButton label="Cite" textToCopy={props.publication.citation} />
            <ClipboardButton label="DOI" textToCopy={props.publication.doi} />
          </div>
        </div>
      </div>
    </>;
  } else {
    return <></>
  }

}

function ClipboardButton(props: ClipboardButtonProps) {
  const [label, setLabel] = useState<string>(props.label);

  const handleClick = () => {
    navigator.clipboard.writeText(props.textToCopy);
    setLabel('Copied to clipboard');

    setTimeout(() => {
      setLabel(props.label);
    }, 1500);
  };

  return <>
    <div className="btn btn-outline-primary btn-page-header btn-sm clipboard-button"
      onClick={handleClick}>
      {label}
    </div>
  </>
}