import { useState } from 'react';
import './App.scss';

import Sidebar from './partials/Sidebar/Sidebar';
import Experience from './partials/Experience/Experience';
import Projects from './partials/Projects/Projects';
import Publications from './partials/Publications/Publications';
import Contact from './partials/Contact/Contact';

function App() {
  const [activeTab, setActiveTab] = useState<string>('projects');
  return (
    <div className="App">
      <div className="wrapper">
        <aside className="wrapper__sidebar">
          <Sidebar tabChangeHandler={setActiveTab}/>
        </aside>
        <div className="wrapper__main">
          <div className='main-scrollable'>
            {/*
            <header className="header">
              <Navbar tabChangeHandler={setActiveTab} />
            </header>
            */}

            {getMainContent(activeTab)}
          </div>
        </div>
      </div>
    </div>
  );
}

function getMainContent(tab: string) {
  if (tab === 'projects') {
    return <Projects/>
  } else if (tab === 'publications') {
    return <Publications/>
  } else if (tab === 'experience') {
    return <Experience/>
  } else if (tab === 'contact') {
    return <Contact/>
  } else {
    return <>Content not found</>
  }
}

export default App;
