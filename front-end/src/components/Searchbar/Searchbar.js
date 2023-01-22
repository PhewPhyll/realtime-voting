import React from 'react'
import "./Searchbar.css"
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const Searchbar = ({ placeholder, onChange, searchBarWidth }) =>{
    return (
        
        <div className='App'>
        <Box sx={{ display: 'flex', 
                   alignItems: 'center' , 
                   borderRadius: '5rem', 
                   backgroundColor:'#C8F1F7', 
                   mb: '4rem'}}>
                <SearchIcon sx={{ marginRight: '10px', ml: '20px', color: 'rgba(0, 0, 0, 0.7)'}} />
                <Input
                    placeholder={placeholder}
                    onChange={onChange}
                    sx={{width: searchBarWidth, 
                        color: 'rgba(0, 0, 0, 0.5)', 
                        fontSize: '1.5rem'}}
                    disableUnderline
                />
        </Box>
        </div>
    )
}

export default Searchbar

