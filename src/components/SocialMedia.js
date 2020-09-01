import React from 'react'
import GithubContextProvider from '../contexts/GithubContext'
import GithubRepo from './GithubRepo'


function SocialMedia() {
    return (
        <div className="socialMedia">
            <GithubContextProvider>
            <GithubRepo />
            </GithubContextProvider>
           
        </div>
    )
}

export default SocialMedia
