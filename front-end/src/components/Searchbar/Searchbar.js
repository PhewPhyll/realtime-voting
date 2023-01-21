import React from 'react'
import { useState } from 'react'
import JASONDATA from "./MOCK_DATA.json"
import "./Searchbar.css"
function Searchbar() {
    const[searchTerm, setSearchTerm] =useState('')
    return (
        <div className='App'>
        <input 
        type="text" 
        placeholder='Search...' 
        onChange={event =>
          {setSearchTerm(event.target.value)}}/>
        
        {/* {JASONDATA.filter((val)=>{
                if (searchTerm == ""){
                return val
                }
                else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
                }
            })
            .map((val, key)=>{
                return<div>
                {val.first_name}
                </div>
            })
        } */}
        </div>
    )
}

export default Searchbar
