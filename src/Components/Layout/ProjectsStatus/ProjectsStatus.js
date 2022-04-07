import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ProjectStatus = (props) => {
    const { name } = props.projectstatus;
    return (
        <Grid xs={12} sm={6} item md={3}>
            <Box sx={{ backgroundColor: '#262E41', width: '100%', height: '105px', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='body1' sx={{ color: '#A4A6B3' }}>{name}</Typography>
            </Box>
        </Grid>
    );
};

export default ProjectStatus;