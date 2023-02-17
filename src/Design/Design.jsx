import React from 'react'
import "./design.css";
import { TiArrowSortedUp } from "react-icons/ti"

const Design = () => {
    return (
        <div className='design'>
            <Sidebar />
            <Rightsidebar />
        </div>
    )
}

const Sidebar = () => {
    return (
        <div className='sidebar' >
            <h1>Design faster</h1>

            <div className='card-1'>
                <div className='pro-1'><div className="pro-2"><div className="pro-3"></div></div></div>
                <h3>Total earning  </h3>
                <h4>$12,875 <TiArrowSortedUp /><span>2%</span></h4>
                <p>Compared to $21,504 last year</p>
                <div className="row one">
                    <p>Presentation</p>
                    <span>862</span>
                </div>
                <div className="row two">
                    <p>Development</p>
                    <span>753</span>
                </div>
                <div className="row three">
                    <p>Research</p>
                    <span>553</span>

                </div>
            </div>
            <div className="card-2">
                <div> 
                 <h3>Total earning</h3>
                <h4>$12,875 <TiArrowSortedUp /><span>10%</span></h4>
                <p>Compared to $21,490 last year</p>
                </div>
                <div className='hr'></div>
                <div>                
                <h3>Sales</h3>
                <h4>$43,123<TiArrowSortedUp /><span>12%</span></h4>
                <p>Compared to $21,490 last year</p>
                </div>


            </div>

        </div>
    )
}

const Rightsidebar = () => {
    return (
        <div className='rightside'>
                <div className='rightside-cercle'>
                        <div className="cer-1"> <p>Investments</p> <p>$76,644</p><p>$76,644</p> </div>
                        
                </div>
                
        </div>
    )
}


export default Design
