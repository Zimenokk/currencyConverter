import React from 'react';
import {Box, TextField, MenuItem} from '@mui/material'

const MuiSelect = () => {
    return (
        <Box width="100px">
            <TextField
                label='Currency'
                select
                fullWidth
                size={"small"}
                variant="standard"
            >
                <MenuItem  value={"UAH"}>UAH</MenuItem>
                <MenuItem  value={"USD"}>USD</MenuItem>
            </TextField>
        </Box>
    );
};

export default MuiSelect;
