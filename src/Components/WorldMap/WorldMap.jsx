import React from 'react'
import "./worldmap.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";



const WorldMap = () => {
  return (
    <div className='worldmap'>
         <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
    </div>
  )
}

export default WorldMap
