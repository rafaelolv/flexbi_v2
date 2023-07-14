import React from "react";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BarraProgresso = () => {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 12,
        
        // marginLeft: 20,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));
      


    return (
        <Box sx={{ width: '90%' }}>
            <BorderLinearProgress variant="determinate" value={50} />
        </Box>
    )
}

export default BarraProgresso;