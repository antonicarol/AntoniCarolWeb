import React, { useState } from 'react'
import './css/Portfolio.css'

import ProjectsWrapper from './ProjectsWrapper'
import PortfolioContextProvider from '../contexts/PortfolioContext'
import FilterProjects from './FilterProjects'
import ProjectDetail from './ProjectDetail'


function Portfolio() {

    return (
        <div className="portfolio">
            <PortfolioContextProvider>
            <div className="portfolio__summary">
                <FilterProjects />
            </div>
            <div className="portfolio__body">
            <ProjectsWrapper />
            <div className="portfolio__detail">
                <ProjectDetail project={ {} } />
            </div>
            </div>
            

            {/** WELL HAVE THE PROJECTS SHOWED */}

            </PortfolioContextProvider>
        </div>
        
    )
}

export default Portfolio
