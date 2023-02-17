import React, { useState } from 'react'
import "./sidestate.css";
import { RiBarChart2Fill } from 'react-icons/ri';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import { AiOutlineCrown } from 'react-icons/ai';
import { useData } from '../Data/Data';



const SideState = ({handleChart}) => {

  const data = useData();

  const [salesData, setSalesData] = useState( data.dataArr[0] );




  return (
    <div className='side-state'>
            <div>
              <div className='arrowtrending' > <HiOutlineArrowTrendingUp /> </div>
              <div><p>Total earning</p> <p>{salesData.currentyear.totalEarning}</p> </div>
            </div>
            <div onClick={handleChart}>
              <div className='crown' > <AiOutlineCrown /> </div>
              <div><p>Sales</p> <p>{salesData.currentyear.sales}</p> </div>
            </div>
            <div>
              <div className='chart' > <RiBarChart2Fill /> </div>
              <div><p>Purchases</p> <p>{salesData.currentyear.purchase}</p> </div>
            </div>
          </div>
  )
}

export default SideState
