import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SubNav from "../../Components/SubNav/SubNav";
import { DiscriptionTitle, TextFieldStyle } from "../../MuStyled/MuStyled";

const EditProject = () => {
  return (
    <>
      <SubNav />
      <Box component="form">
        <Grid
          container
          spacing={2}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Grid item xs={6}>
            <TextFieldStyle
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth
            ></TextFieldStyle>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextFieldStyle fullWidth></TextFieldStyle>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextFieldStyle fullWidth></TextFieldStyle>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextFieldStyle fullWidth></TextFieldStyle>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextFieldStyle fullWidth></TextFieldStyle>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextFieldStyle fullWidth></TextFieldStyle>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextFieldStyle fullWidth></TextFieldStyle>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextFieldStyle fullWidth></TextFieldStyle>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextFieldStyle fullWidth></TextFieldStyle>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextFieldStyle fullWidth></TextFieldStyle>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextFieldStyle fullWidth></TextFieldStyle>
          </Grid>
        </Grid>
        <DiscriptionTitle>Description:</DiscriptionTitle>
      </Box>
    </>
  );
};

export default EditProject;
