import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';

import './Home.css';
import { Link } from 'react-router-dom';
import ProjectStatus from '../../Components/Layout/ProjectsStatus/ProjectsStatus';
import ProjectList from '../../Components/ProjectList/ProjectList';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {

    const projects = [
        {
            id: 101,
            projectName: 'ERP System',
            openTask: '12 open to Task',
            description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla adipiscing sagittis facilisis mauris. Sit imperdiet proin sed sed eget pulvinar. Senectus consectetur phasellus placerat sagittis neque. Lectus elit senectus sed venenatis diam volutpat quam. Et lorem vitae id at massa vehicula dui ac. Duis nullam sociis urna amet, vitae in. Ut dictum enim accumsan cras. Tellus tristique amet felis.',
            create: 'Jan 21, 2022',
            teamLeader: 'David',
            priority: 'Low',
            deadline: 'Apr 17, 2022',
            bug: 5,
            team: 6
        },
        {
            id: 102,
            projectName: 'Gi Next',
            openTask: '12 open to Task',
            description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla adipiscing sagittis facilisis mauris. Sit imperdiet proin sed sed eget pulvinar. Senectus consectetur phasellus placerat sagittis neque. Lectus elit senectus sed venenatis diam volutpat quam. Et lorem vitae id at massa vehicula dui ac. Duis nullam sociis urna amet, vitae in. Ut dictum enim accumsan cras. Tellus tristique amet felis.',
            create: 'Jan 21, 2022',
            teamLeader: 'David',
            priority: 'Low',
            deadline: 'Apr 17, 2022',
            bug: 5,
            team: 6
        },
    ]

    const projectStatus = [
        {
            id: 1,
            name: 'New Project'
        },
        {
            id: 2,
            name: 'Running'
        },
        {
            id: 3,
            name: 'On Hold'
        },
        {
            id: 4,
            name: 'Finished'
        }
    ]
    return (
        <Box sx={{ p: 3 ,backgroundColor:"#1A202E",borderRadius:"15px"}} className='home-main-bg'>

            {/* Heading Start */}
            <Box sx={{ mb: 3, color: '#A4A6B3', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h6'>All Project</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Link to='/addprojects'>
                        <AddBoxIcon sx={{ color: "A4A6B3" }} />
                    </Link>
                    <Link to='/home'>
                        <HomeIcon sx={{ mx: 1 }} />
                    </Link>
                    <ArrowForwardIosIcon sx={{ fontSize: '12px ', mx: 1 }} />
                    <Typography variant='body1' sx={{ mx: 1, color: '#A4A6B3', fontSize: '14px' }}> Projects</Typography>
                    <ArrowForwardIosIcon sx={{ fontSize: '12px ', mx: 1 }} />
                    <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '14px' }}>All Projects</Typography>
                </Box>
            </Box >
            {/* Heading end */}

            {/* Projct Status Start */}
            <Grid container spacing={2}>
                {
                    projectStatus.map(projectstatus => <ProjectStatus
                        key={projectstatus.id}
                        projectstatus={projectstatus}
                    ></ProjectStatus>)
                }
            </Grid> 
            {/* Projct Status End */}

            {/* Project List Start */}
            <Box sx={{ mt: 3, color: '#A4A6B3' }}>
                <Grid container spacing={2}>
                    {
                        projects.map(project => <Grid item lg={6} md={12} sm={12}
                            key={project.id}
                        >
                            <ProjectList
                            
                            project={project}
                        ></ProjectList>
                        </Grid>)
                    }
                </Grid>
            </Box>
             {/* Project List End */}
        </Box >
    );
};

export default Home;
