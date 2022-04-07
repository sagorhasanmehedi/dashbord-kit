import { Box, Button, FormControl, Grid, Input, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/material/styles';
import "./EdisProjects.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


const EditProjects = () => {
 

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    // TextField style
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: '#D6E4EC',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#D6E4EC',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#D6E4EC',
          },
          '&:hover fieldset': {
            borderColor: '#D6E4EC',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#D6E4EC',
          },
        },
      });
  
 





    return (
        <Box sx={{ p: 3 ,backgroundColor:"#1A202E",borderRadius:"15px"}} className='home-main-bg'>

        {/* Heading Start */}
        <Box sx={{ mb: 3, color: '#A4A6B3', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant='h6'>Add Project</Typography>
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
                <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '14px' }}>Add Projects</Typography>
            </Box>
        </Box >
        {/* Heading end */}
 
 {/* TextField start */}
 <Grid container spacing={3}>
  <Grid item xs={6}>
  <CssTextField label="Outlined secondary" sx={{width:"100%"}} id="custom-css-outlined-input" focused />
   </Grid>
  <Grid item xs={6}>
  <CssTextField sx={{width:"100%"}} label="Custom CSS" id="custom-css-outlined-input" /> </Grid>
  
  <Grid item xs={6}>
  <CssTextField sx={{width:"100%"}} label="Custom CSS" id="custom-css-outlined-input" /> </Grid>
  <Grid item xs={6}>
  <CssTextField sx={{width:"100%"}} label="Custom CSS" id="custom-css-outlined-input" /> </Grid>
  <Grid item xs={6}>
  <CssTextField sx={{width:"100%"}} label="Custom CSS" id="custom-css-outlined-input" /> </Grid>
  <Grid item xs={6}>
  <CssTextField sx={{width:"100%"}} label="Custom CSS" id="custom-css-outlined-input" /> </Grid>
  <Grid item xs={12}>
  <CssTextField sx={{width:"100%"}} label="Custom CSS" id="custom-css-outlined-input" /> </Grid>
  <Grid item xs={12}>
  <CssTextField sx={{width:"100%"}} label="Custom CSS" id="custom-css-outlined-input" />
 </Grid>
  </Grid>

<Typography sx={{fontSize:"18px",fontWeight:"400",marginY:"30px",color:"#A4A6B3",textAlign:"left",lineHeight:"13.57px"}}>
Description:
</Typography>

<Box sx={{padding:"24px",backgroundColor:"#262E41",borderRadius:'15px'}}>
    <Typography sx={{fontSize:"12px",fontWeight:"400",color:"#FFFFFF",lineHeight:"13.57px",textAlign:"left"}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus interdum ornare lectus lobortis curabitur felis, condimentum arcu dis. Porttitor aliquam tellus ut pulvinar quis. Vitae arcu volutpat id est tristique consequat. Ligula pretium vel in nunc quis odio vel amet. Pellentesque in eget eu sed nisl massa augue ornare eget. Elit eu gravida mauris, orci. Sapien laoreet nunc dolor tortor vitae, feugiat. Scelerisque adipiscing consequat lectus purus donec feugiat. Turpis leo bibendum et accumsan mi. Nulla arcu massa facilisis quisque id sed. Tortor auctor cras feugiat sed massa cursus tempus.
In tellus sapien tincidunt viverra nisi et. Blandit odio ullamcorper maecenas dictum iaculis. Neque, feugiat ut venenatis id sed quis eget. Turpis facilisi volutpat adipiscing pretium enim montes, suscipit. Purus mauris lobortis consectetur congue. Dignissim viverra tincidunt ipsum tellus. Dictum id at pulvinar arcu massa dui dolor. Magnis pellentesque nunc non et, dictumst tellus eget tincidunt. Enim eget posuere aliquet dictum accumsan.
Volutpat massa curabitur vitae massa dapibus venenatis integer dignissim sollicitudin. Mollis urna vitae sed proin. Nunc metus porttitor quis eget tincidunt. Sed odio sed nisi eget neque eget magna ac enim. Porttitor turpis ultricies maecenas neque. Imperdiet ipsum feugiat urna, sed sit in. Orci mi vestibulum interdum condimentum enim, enim at vitae in. Rhoncus etiam at habitasse odio. Sed purus massa ultrices facilisi egestas elementum senectus ac. Faucibus blandit interdum vestibulum et, bibendum habitasse nec cras pellentesque. Magna cras nibh sodales molestie vel euismod eget. Non purus arcu faucibus nulla ultrices lectus laoreet sit.
Magna blandit sed aliquet dui pretium nulla mollis. Quam fusce aliquam adipiscing sollicitudin faucibus lacus, risus adipiscing duis. Phasellus sed convallis varius facilisis id aliquet et non. Sit eget egestas a volutpat turpis. Adipiscing magna sit faucibus habitant velit molestie amet tortor. Morbi id vel sapien dui et ac nisi, molestie varius. Praesent mauris, hac sed augue. Convallis nisi, et porttitor vehicula augue cursus vitae massa quis. Congue mattis viverra massa at consectetur velit. Amet, arcu nam at egestas sed. Posuere velit egestas praesent proin. Aenean donec tortor nullam aliquam, malesuada nec. Est mi scelerisque est, massa in in dis donec sapien. Est scelerisque egestas quam felis, et.

    </Typography>
</Box>

<FormControl sx={{marginY:"33px",display:"flex",flexDirection:"row"}}>
      
          <FormControlLabel
          value="start"
          control={<Radio sx={{marginLeft:"20px",marginRight:"16px" }}/>}
          label="Work Status"
          labelPlacement="start"
        />
          <FormControlLabel
          value="start"
          control={<Radio sx={{marginLeft:"20px",marginRight:"16px" }}/>}
          label="Active"
          labelPlacement="start"
        />
          <FormControlLabel
          value="start"
          control={<Radio sx={{marginLeft:"20px",marginRight:"16px" }}/>}
          label="Completed"
          labelPlacement="start"
        />
          <FormControlLabel
          value="start"
          control={<Radio sx={{marginLeft:"20px",marginRight:"16px" }}/>}
          label="Running"
          labelPlacement="start"
        />
          <FormControlLabel
          value="start"
          control={<Radio sx={{marginLeft:"20px",marginRight:"16px" }}/>}
          label="Pending"
          labelPlacement="start"
        />
          <FormControlLabel
          value="start"
          control={<Radio sx={{marginLeft:"20px",marginRight:"16px" }}/>}
          label="Not Started"
          labelPlacement="start"
        />
          <FormControlLabel
          value="start"
          control={<Radio sx={{marginLeft:"20px",marginRight:"16px" }}/>}
          label="Cancled"
          labelPlacement="start"
        />

        
   
    </FormControl>
    <div className='choose-file'>

    {/* <div class="upload-btn-wrapper">
    <button class="btn">Choose File</button> 
    <input type="file" name="myfile" />
    </div> */}
 <div class="upload-btn-wrapper">
 <input type="file" name="myfile" />

 </div>
<p className='fileUplode-text'>or drag and drop file here</p>
    </div>
 </Box>
    );
};

export default EditProjects;