import React, { useContext} from 'react';
import './css/GithubRepo.css'
import { GithubContext } from '../contexts/GithubContext';
import { ProgressBar } from 'react-bootstrap';
import {Avatar, makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

  
function GithubRepo() {
    const classes = useStyles();
    
    const{repos, randomRepo, repoLang, repoTopics, repoOwner} = useContext(GithubContext);

    console.log(repos)
    console.log(randomRepo)
    console.log(repoLang)
    console.log(repoTopics)
    console.log(repoOwner.avatar_url)


    return (
        <div onClick={()=> window.open(randomRepo.html_url)} className="githubRepo">
            <div className="githubRepo__header">
                <div>
                    <Avatar className={classes.large} src={repoOwner.avatar_url} />
                    <h3>{randomRepo.name}</h3>
                    <img alt="" src="https://api.iconify.design/bx:bxl-github.svg?color=white"/>
                </div>
                <p>{randomRepo.url}</p>
              
                
                
            </div>
            <div className="githubRepo__topics">
                {repoTopics &&
                Object.values(repoTopics).map((topic)=>{
                     return <p key={topic.id}>{topic.topic}</p>
                })}
            </div>
            <div className="githubRepo__languages">
                <div className="githubRepo__progress__tags">

                {Object.values(repoLang).map(lang =>{
                    return (<div>
                        <img src={lang.icon} alt="" />
                        <p>{lang.key}</p> </div>)
                })}
                </div>
                
                <ProgressBar >
                    {Object.values(repoLang).map(lang =>{
                        return <ProgressBar 
                                variant={lang.color} 
                                now={lang.value} 
                                key={lang.key}
                                 />
                    
                                })} 
                </ProgressBar>
                
                
            </div>
        </div>
    )
}

export default GithubRepo
