import React from 'react'
import './css/RoadMapGoals.css'
import {Circle } from 'rc-progress';

function RoadMapGoals() {
    return (
        <div className="roadMapGoals">
            <h1> Goals </h1>
            
            <h4> BECOME A FULL STACK DEV </h4>
            <div className="roadMapGoals__progress">
                <div className="roadMapGoals__progress__item">
                    <Circle className="circleProgress" percent="40" strokeWidth="4" strokeColor="#4ecca3" />
                    <h5>Frontend</h5>
                </div>
                <div className="roadMapGoals__progress__item">
                    <Circle className="circleProgress" percent="40" strokeWidth="4" strokeColor="#4ecca3" />
                    <h5>Backend</h5>
                </div>
            </div>
        </div>
    )
}

export default RoadMapGoals
