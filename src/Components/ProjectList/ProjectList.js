import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ManuIcon from '../ProjectList/MenuIcon';
// import ProgressBar from "@ramonak/react-progress-bar";
import './ProjectsList.css';

const ProjectList = (props) => {
    const { projectName, openTask, description, create, teamleader, priority, deadline, bug, team } = props.project;
    return (
            <Box sx={{ backgroundColor: '#262E41', width: '100%', borderRadius: 2, p: 3, textAlign: 'left' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='h5' sx={{ color: '#A4A6B3', fontSize: '24px', mb: 1 }}>{projectName}</Typography>
                    <ManuIcon></ManuIcon>
                </Box>
                <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '12px' }}>{openTask}</Typography>
                <Typography variant='body1' sx={{ color: '#fff', fontSize: '12px', my: 2 }}>
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Box sx={{ color: '#A4A6B3', mb: 1, }}>
                        <Typography variant='body1' sx={{ fontSize: '10px' }} > Created: {create} </Typography>
                        <Typography variant='body1' sx={{ fontSize: '10px' }} > Team Leader: {teamleader} </Typography>
                        <Typography variant='body1' sx={{ fontSize: '10px' }}> Priority:{priority} </Typography>
                        <Typography variant='body1' sx={{ fontSize: '10px' }}> Deadline: {deadline} </Typography>
                        <Typography variant='body1' sx={{ fontSize: '10px' }}> Bugs:{bug}</Typography>
                        <Typography variant='body1' sx={{ fontSize: '10px' }}> Team:{team}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '10px', mb: 1 }}>Category </Typography>
                        <Button variant="contained" color="info">
                            Website
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ my: 2 }}>
                    {/* <ProgressBar completed={180} maxCompleted={200} /> */}
                </Box>
            </Box>
    );
};

export default ProjectList;