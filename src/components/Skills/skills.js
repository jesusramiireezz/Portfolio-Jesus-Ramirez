import React, { useState, useEffect } from 'react';
import './skills.css';

const skillGroups = [
  {
    title: 'Front-End',
    stack: 'HTML, CSS, JavaScript, React, Bootstrap',
    description: 'Modern, responsive interface development. Reusable components with React and fast layouts using Bootstrap.',
  },
  {
    title: 'Back-End',
    stack: 'Node.js, PHP, JavaScript',
    description: 'Automation and server-side logic. API creation, scripts, and system integrations.',
  },
  {
    title: 'Power Platform & M365',
    stack: 'Power Automate, Power BI, Power Apps, Microsoft 365',
    description: 'Advanced automation across emails, SharePoint and CRM. Business dashboards and internal low-code apps.',
  },
  {
    title: 'ERP & Dynamics',
    stack: 'Dynamics 365 CRM, Business Central',
    description: 'Opportunity management, CRM–ERP automation and business process integration in enterprise environments.',
  },
  {
    title: 'OS Knowledge',
    stack: 'Windows, Linux',
    description: 'System configuration, user management, group policies and scripting in Windows & Linux.',
  },
];

const Skills = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % skillGroups.length);
        setFade(true);
      }, 100);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((index + 1) % skillGroups.length);
      setFade(true);
    }, 100);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((index - 1 + skillGroups.length) % skillGroups.length);
      setFade(true);
    }, 100);
  };

  const current = skillGroups[index];

  return (
    <section id='skillsContainer'>
      <h2 className='containerTitle'>&lt; Skills /&gt;</h2>

      <div className={`carouselCard ${fade ? 'fade' : ''}`}>
        <h3 className='skillTitle'>{current.title}</h3>
        <p className='skillStack'>{current.stack}</p>
        <p className='skillDesc'>{current.description}</p>

        <div className='carouselControls'>
          <button onClick={handlePrev} className='carouselBtn'>&lt;</button>
          <button onClick={handleNext} className='carouselBtn'>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
