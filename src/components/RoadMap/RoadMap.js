import React from 'react'
import './css/RoadMap.css'
import RoadMapSummary from './RoadMapSummary'
import ProgressFrontend from './ProgressFrontend'
import ProgressBackend from './ProgressBackend'

function RoadMap() {
    return (
        <div className="roadMap">
            <RoadMapSummary />
            <div className="roadMap__progress">
                <ProgressFrontend />
                <ProgressBackend />
            </div>
        </div>
    )
}

export default RoadMap
