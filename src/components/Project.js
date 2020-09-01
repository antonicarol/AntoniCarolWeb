import React from 'react'
import './css/Project.css'
function Project({project}) {
    return (
        <div className="project">

            <div className="project__top">
                <h3>{project.title}</h3>
            </div>
            <div className="project__center">
                <img src={project.posterUrl} alt="" />
                {project.mainTool &&
                <div className="project__mainTool">
                    <img src ={project.mainTool} alt=""></img>
                </div>}
            </div>
            

            <div className="project__bottom">
                {project.tags.map(tag=>{
                   return <img key={Math.random(0,9999)} src={tag} alt="" />
                })}
            </div>
            
        </div>
    )
}


export default Project
