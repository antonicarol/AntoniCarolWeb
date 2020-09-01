import React, { createContext, useState, useEffect } from 'react';
import requests from '../githubApi/requests';
import axios from '../githubApi/axios';


export const GithubContext = createContext();



const token = 'f2346f6407faa602e80c5e36478dec76e3062c0a';

const getResourcecolor = (key) =>{
    if(key === "CSS"){
        return "primary";
    }
    if(key === "HTML"){
        return "danger";
    }
    if(key === "JavaScript"){
        return "warning";
    }
}

const getIcon =(key)=>{
    if(key === "CSS"){
        return "https://api.iconify.design/logos:css-3.svg";
    }
    if(key === "HTML"){
        return "https://api.iconify.design/logos:html-5.svg";
    }
    if(key === "JavaScript"){
        return "https://api.iconify.design/logos:javascript.svg";
    }
}

const GithubContextProvider = (props) => {
    const[repos, setRepos] = useState([]);
    const[randomRepo, setRandomRepo] = useState({});
    const[repoLang, setRepoLang] = useState({});
    const[repoTopics, setRepotopics] = useState([])
    const[repoOwner, setRepoOwner] = useState({})

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(requests.fetchAllRepos,{
                headers :{
                    "Authorization" : `token ${token}`
                }
            } 
               );
            setRepos(response.data)
            setRandomRepo(response.data[0])
            setRepoOwner(response.data[0].owner)
            return response;
        }

        fetchData();
        
    }, [])

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(`repos/${randomRepo.full_name}/languages`,{
                headers : {
                    "Authorization" : `token ${token}`
                }});
            setRepoLang(Object.entries(response.data).map(obj =>({
                key:obj[0],
                value: obj[1],
                color: getResourcecolor(obj[0]),
                icon: getIcon(obj[0])
            }))

            );
            return response;
        }

        fetchData();
    }, [randomRepo])

    useEffect(()=>{
        var id = 0;
        async function fetchData(){
            const response = await axios.get(`https://api.github.com/repos/${randomRepo.full_name}/topics`,{
                headers :{
                    "Accept" : "application/vnd.github.mercy-preview+json",
                    'Content-Type': 'application/json',
                    "Authorization" : `Bearer${token}` 
                },
            })
        
            setRepotopics(response.data.names.map(name =>({
                id: id++,
                topic: name
            })))
        }

        fetchData();
    }, [randomRepo])
    
    return (
        <GithubContext.Provider value={{repos, randomRepo, repoLang, repoTopics, repoOwner}}>
            {props.children}
        </GithubContext.Provider>
      );
}
 
export default GithubContextProvider;