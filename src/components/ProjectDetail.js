import React, { useContext } from 'react'
import './css/ProjectDetail.css'
import { PortfolioContext } from '../contexts/PortfolioContext'
function ProjectDetail() {
    const{detailProject} = useContext(PortfolioContext);

    console.log(detailProject?.tags);
    return (
        <div className="projectDetail">
           {detailProject ? (
            <> 
             <div className="projectDetail__top">
                 <h1>{detailProject.title}</h1>
                 
             </div>
             <div className="projectDetail__body">
                 <div className="projectDetail__body__top">
                    <img src={detailProject.posterUrl} alt="" />
                    <div className="projectDetail__body__summary">

                    </div>
                 </div>

                 <div className="projectDetail__body__links">
                     <div className="projectDetail__body__linkItem">
                         <img src="https://api.iconify.design/mdi:web.svg?color=%234ecca3" alt="" />
                         <button onClick={()=> window.open(detailProject.webUrl)}> See The Demo!</button>
                     </div>
                     <div className="projectDetail__body__linkItem">
                     <img src="https://api.iconify.design/bx:bxl-github.svg?color=gray" alt="" />
                         <button  onClick={()=> window.open(detailProject.githubUrl)}> See The Code Behind</button>
                     </div>
                 </div>
                 
             </div> 
             <div className="projectDetail__bottom">
             
                {detailProject.tags.map(tag=>{
                   return <img key={Math.random(0,9999)} src={tag} alt="" />
                })}
            
            </div> 
            </>
           ) : (
               <div className="projectDetail__noneSelected">
                   <h1>Click on a project card to see details!</h1>
               </div>
           )
         }
        </div>
    )
}

export default ProjectDetail
