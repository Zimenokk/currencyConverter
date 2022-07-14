import React from 'react';
import {TextField} from "@mui/material";

const MuiInput = ({value, setValue}) => {
    return (
        <TextField
            // fullWidth
            size={'small'}
            variant={'standard'}
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
        />
    );
};

export default MuiInput;