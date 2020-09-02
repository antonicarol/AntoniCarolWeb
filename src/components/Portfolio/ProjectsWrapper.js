import React, { useContext } from 'react'
import './css/ProjectsWrapper.css'
import Project from './Project'
import { PortfolioContext } from '../../contexts/PortfolioContext'
import 'devicon/devicon-colors.css';

function ProjectsWrapper() {
    const{projects} = useContext(PortfolioContext)
    return (
        <div className="projectsWrapper">
        
           {projects.map(p =>{
                return <Project key={p.id}
                        project={p.data} />
           })}
        
        </div>
    )
}

export default ProjectsWrapper
