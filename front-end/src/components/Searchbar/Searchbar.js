import React from 'react'
import { useState } from 'react'
import JASONDATA from "./MOCK_DATA.json"
import "./Searchbar.css"
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const Searchbar = ({ placeholder, onChange, searchBarWidth }) =>{
    return (
        
        <div className='App'>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ marginRight: '10px' }} />
            <Input
                placeholder={placeholder}
                onChange={onChange}
                sx={{width: searchBarWidth, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
                disableUnderline
            />
        </Box>
        </div>
    )
}

export default Searchbar

