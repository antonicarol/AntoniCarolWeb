import React from 'react'
import './css/ProgressBackend.css'
import {Line } from 'rc-progress';

function ProgressBackend() {
    return (
        <div className="progressBackend">
            <div className="progressBackend__top">
                <h1>Mastering Backend</h1>
            </div>
            <div className="progressBackend__body">
            <div className="progressBackend__body__item">
                <img src="https://api.iconify.design/ant-design:console-sql-outlined.svg?color=blue" alt="" />
                <Line className="circleProgress" percent="40" strokeWidth="10" strokeColor="#4ecca3" />
                <h4>SQL</h4>
                </div>
                <div className="progressBackend__body__item">
                <img src="https://api.iconify.design/whh:nosql.svg?color=red" alt="" />
                <Line className="circleProgress" percent="40" strokeWidth="10" strokeColor="#4ecca3" />
                <h4>NO SQL</h4>
                </div>
               
            </div>
        </div>
    )
}

export default ProgressBackend
