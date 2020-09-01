import React, { createContext, useState, useEffect } from 'react';
import db from '../firebase/firebase';

export const PortfolioContext = createContext();

const PortfolioContextProvider = (props) => {

    const[projects, setProjects] = useState([]);

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
        <PortfolioContext.Provider value={{projects}}>
            {props.children}
        </PortfolioContext.Provider>
        
    );
};

export default PortfolioContextProvider;