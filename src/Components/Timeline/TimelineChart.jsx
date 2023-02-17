import React from 'react'
import "./timelinechart.css"
const TimelineChart = () => {

  const arr = ["20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px"]

  console.log(arr);

  return (
    <div className='timelinechart'>
      <div className="timelinechart-info">
          <p>Sales Figures</p>
          <span>$10,430</span>
      </div>
      <div className='colm-box'>
        {
          arr.map((i, index ) => {return   <div className='colm' style={{ width: "18px", height: `${i}`  }} ></div>})

        }
      </div>
    </div>
  )
}

export default TimelineChart
