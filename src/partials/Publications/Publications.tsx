import publist from '../../static/content/publications.json';

import './Publications.scss';

import Publication_Image1 from '../../static/images/publication_images/publication1.png';
import { ClipboardButtonProps, FeaturedPublication } from '../../types';


export default function Publications() {
  return <>
    <div className='main-panel-container'>
      <h2>FEATURED PUBLICATIONS</h2>
      {
        publist.publications.map((pub, index) => 
        <FeaturedPublicationPanel publication={pub}/>)
      }
    </div>
  </>
}

type FeaturedPublicationPanelProps = {
  publication: FeaturedPublication
}


function FeaturedPublicationPanel(props: FeaturedPublicationPanelProps) {
  const image = require('../../static/images/publication_images/' + props.publication.image_url)

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

        <br/>

        <div className="author-list-section">
          {
            props.publication.authors.map((author, index) => {
              if (index !== props.publication.authors.length-1) {
                return <><span>{author}</span>, </>
              } else {
                return <><span>{author}</span></>
              }
            })
          }
        </div>

        <br/>

        <span className="article-date">{props.publication.date}</span>
        <span className="middot-divider"></span>
        <span className="pub-publication">In <a href={props.publication.journal_link}><em>{props.publication.journal}</em></a></span>

        <div className="section-subheading article-title mb-1 mt-3">
          <a href="/publication/cad/" >{props.publication.title}</a>
        </div>

        <div className="article-abstract">
          <p>{props.publication.abstract}</p>
        </div>

        <br/>
        
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
  </>
}

function ClipboardButton(props: ClipboardButtonProps) {
  return <>
    <div className="btn btn-outline-primary btn-page-header btn-sm" 
         onClick={() => {
           navigator.clipboard.writeText(props.textToCopy);
         }}>
      {props.label}
    </div>
  </>
}