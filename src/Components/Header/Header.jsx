import React from 'react'
import "./header.css";
import {RxAvatar} from "react-icons/rx"
import {TbFilter} from "react-icons/tb"
import {AiOutlineSearch} from "react-icons/ai"


const Header = ( ) => {
  return (
    <div className='header'>
        <h3>WASSERSTOFF</h3>
        <nav>
            <ul>
                <li className='search-input' >
                    <input type="text" />
                    <AiOutlineSearch />
                </li>
                <li>Statistics</li>
                <li>Overview</li>
                <li>Dashboard</li>
                <li>Analytics</li>
            </ul>
        </nav>
        <div className='avatar-section'>
            <RxAvatar />
            <TbFilter />
        </div>
    </div>
  )
}

export default Header

