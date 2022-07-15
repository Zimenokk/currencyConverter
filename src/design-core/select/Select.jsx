import React from 'react';
import {Box, TextField, MenuItem} from '@mui/material'

const MuiSelect = ({value, setValue,completeObj}) => {
    return (
        <Box width="100px">
            <TextField
                label='Currency'
                select
                fullWidth
                size={"small"}
                variant="standard"
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}
            >
                {completeObj.map((item)=>(<MenuItem  key={item.cc} value={item.cc}>{item.cc}</MenuItem>))}
            </TextField>
        </Box>
    );
};

export default MuiSelect;
