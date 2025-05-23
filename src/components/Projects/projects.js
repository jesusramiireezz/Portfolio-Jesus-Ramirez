import React from 'react';
import './projects.css';
import JoliesImg from '../../assets/jolieslibelules.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className='projectsTitle'>&lt; Projects /&gt;</h2>
            <div className='projectsContainer'>
                <div className='projectCard'>
                    <a href="https://jolieslibelules.com" target="_blank" rel="noopener noreferrer">
                        <img src={JoliesImg} alt="Jolies Libelules Project" className='projectImg' />
                    </a>
                    <h3 className='projectName'>Jolies Libelules</h3>
                    <p className='projectDesc'>
                    Professional website for a beauty center in Palma. Includes services, pricing, booking, and SEO optimization.
                    </p>
                    <span className='tech'>
                        Made with:
                        <FontAwesomeIcon icon={faReact} className='iconStyle' />
                        <FontAwesomeIcon icon={faCss3Alt} className='iconStyle' />
                        <FontAwesomeIcon icon={faGlobe} className='iconStyle' />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Projects;
