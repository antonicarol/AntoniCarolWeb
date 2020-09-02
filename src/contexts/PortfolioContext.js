import React, { createContext, useState, useEffect } from 'react';
import db from '../firebase/firebase';

export const PortfolioContext = createContext();

const PortfolioContextProvider = (props) => {

    const[projects, setProjects] = useState([]);
    const[detailProject, setDetailproject] = useState(null);

    const handleDetailProject =(project)=> setDetailproject(project);

    useEffect(() => {
        db.collection('projects').onSnapshot(snap =>{
            setProjects(snap.docs.map((doc) =>({
                id:doc.id,
                data:doc.data()
            })))
        })
        
    }, [])
    console.log(projects);
    return (
        <PortfolioContext.Provider value={{projects, detailProject,
                                        handleDetailProject}}>
            {props.children}
        </PortfolioContext.Provider>
        
    );
};

export default PortfolioContextProvider;