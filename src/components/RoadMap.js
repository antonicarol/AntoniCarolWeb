import React from 'react'
import './css/RoadMap.css'
import RoadMapGraph from './RoadMapGraph'
import RoadMapGoals from './RoadMapGoals'
function RoadMap() {
    return (
        <div className="roadMap">
            <div className="roadMap__info">
                <h1> {`<RoadMap /> `}</h1>
                <p> Just wanted to have all the path I follow to achieve my goals.</p>
            </div>

            <div className="roadMap__body">

                <div className="roadMap__center">
                    <RoadMapGraph />
                </div>
                <div className="roadMap__right">
                    <RoadMapGoals />
                </div>
            </div>
        </div>
    )
}

export default RoadMap
