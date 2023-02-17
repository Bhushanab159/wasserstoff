import React, {createContext, useContext} from 'react'

const DataContext = createContext();

export const useData = () => useContext(DataContext);


export const DataProvider = (props) => {

    const dataArr = [
    { currentyear: {
        allUser : 2431340,
        activeUser: 929800,
        newUser: 226521,
        totalEarning: 540549,
        sales: 1205677,
        purchase: 48430039,
        salesFigures : {
              jan: 27632,
              fab: 27732,
        },
        contrywise : {
          Chicago: 98320300,
          Manaus: 12320300,
          Berlin: 76541106,
          Giza: 10547980,
          Shanghai: 239570110,
          Queensland: 6097321,
        }
       },
       lastYear : {
        allUser : 2411340,
        activeUser: 91980,
        newUser: 21652,
        totalEarning: 530549,
        sales: 1195677,
        purchase: 48418939,
        salesFigures : {
          jan: 27632,
          fab: 27732,
          mar: 25632,
          apr: 37632,
          may: 27661,
          june: 28132,
          july: 29832,
          aug: 27632,
          sept: 27412,
          oct: 37632,
          nov: 22652,
          dec: 28563,
        }
       }
     }
    ]

  return (
    <DataContext.Provider value={{dataArr}} >
        {props.children}
    </DataContext.Provider>
  )
}


