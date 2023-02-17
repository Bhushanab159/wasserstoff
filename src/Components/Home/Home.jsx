import React, { useEffect, useState } from 'react'
import {  AiOutlineRight } from 'react-icons/ai';
import Progress from '../Progress/Progress';
import SideState from '../SideState/SideState';
import TimelineChart from '../Timeline/TimelineChart';
import "./home.css";
import { useData } from '../Data/Data';
import WorldMap from '../WorldMap/WorldMap';
import { Chart } from 'react-charts';



const Home = () => {

// create a instence for data 

  const data = useData();


// set state for data

  const [salesData, setSalesData] = useState( data.dataArr[0] );

  console.log("saal", salesData);

  const [chartDisplay, setChartDisplay] = useState();

  const handleChart = () => {
      if(chartDisplay == "none"){
    setChartDisplay("block")
      }else{
    setChartDisplay("none")

      }
  }




  return (
    <>
      {/* <Header  /> */}
      <div className="home-body" >
        <h4>WSTF FRONT-END HACKATHON</h4>
        <div className="left">
          <p>All users <span>DETAILS <AiOutlineRight /> </span> </p>
          <h1>{salesData.currentyear.allUser}</h1>
          <SideState handleChart={handleChart} />
          <Progress />
        </div>
        <TimelineChart />
      </div>
      {/* <Footer /> */}
      <ChartPopup chartDisplay={chartDisplay} />
    </>
  )
}


export const ChartPopup = ({chartDisplay}) => {

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )

  const series = React.useMemo(()=>({
    type: "bubble"
  }), [])
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )


  return (
    <div className='chartpopup' style={{display: `${chartDisplay}`}} >
        <div className="chart-top">
        <h4>Sales Figures</h4>
        <div>
        <p><div className='o'></div>Sales </p>
        <p><div className='t'></div>Users </p>
        <p><div className='th'></div>Product </p>
        <p><div className='f'></div>Team </p>
        </div>
       

        </div>

        <div
      style={{
        width: '38rem',
        height: '300px',
        marginTop: "20px"
      }}
    >
      <Chart data={data} series={series} axes={axes} tooltip />

        <div className='cercle-1'> <p>$27632</p><p>August</p> </div>
        <div className='cercle-2'>$27632</div>
        <div className='cercle-3'>$27632</div>
    </div>


    </div>
  )
}

export default Home
