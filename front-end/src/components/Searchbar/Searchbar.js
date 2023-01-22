import React from 'react'
import Box from '@mui/material/Box';
import { InputAdornment, TextField } from '@mui/material';

//Icon
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ placeholder, onChange }) => {
    return (
        <Box>
            <TextField
                fullWidth
                color='secondary'
                placeholder={placeholder}
                onChange={onChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}

export default Searchbar

