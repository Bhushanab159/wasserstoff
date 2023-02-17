import React, { useState } from 'react'
import "./progress.css"
import { useData } from '../Data/Data';

const Progress = () => {

// create a instence for data 
const data = useData();

// set state for data
const [salesData, setSalesData] = useState( data.dataArr[0] );


// percentage calculation

const  activeUser = (( salesData.currentyear.activeUser / salesData.currentyear.allUser   ) * 100).toFixed();
const  newUser = ((  salesData.currentyear.newUser / salesData.currentyear.allUser ) * 100).toFixed();

  return (
    <div className='progress'>
    <div className='progress-1'>
        <div className='round-progress-1' >{`${ activeUser }%`}</div>
        <div className="info"> 
                <p>{salesData.currentyear.activeUser }</p>
                <span>Active users</span>
        </div>
    </div>
    <div className='progress-2'>
        <div className='round-progress-2' >{`${ newUser }%`}</div>
        <div className="info"> 
                <p>{salesData.currentyear.newUser}</p>
                <span>New users</span>
        </div>
    </div>
    </div>
  )
}

export default Progress
