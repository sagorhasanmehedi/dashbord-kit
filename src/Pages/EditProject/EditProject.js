import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SubNav from "../../Components/SubNav/SubNav";
import { DiscriptionTitle, TextFieldStyle } from "../../MuStyled/MuStyled";

const EditProject = () => {
  // get depertment
  const [Department, setdepartment] = React.useState("");
  const handleDapertmentChange = (event) => {
    setdepartment(event.target.value);
  };
  // get price
  const [Price, setPrice] = React.useState("");
  const handlePriceChange = (event) => {
    setdepartment(event.target.value);
  };
  // get Team Leader
  const [TeamLeader, setTeamLeader] = React.useState("");
  const handleTeamLeaderChange = (event) => {
    setdepartment(event.target.value);
  };
  // get Team Member
  const [TeamMember, setTeamMember] = React.useState("");
  const handleTeamMemberChange = (event) => {
    setdepartment(event.target.value);
  };
  // get Category
  const [Category, setCategory] = React.useState("");
  const handleCategoryChange = (event) => {
    setdepartment(event.target.value);
  };
  // get Project Priority
  const [ProjectPriority, setProjectPriorit] = React.useState("");
  const handleProjectPriorityChange = (event) => {
    setdepartment(event.target.value);
  };
  // get Phases
  const [Phases, setPhases] = React.useState("");
  const handlePhasesChange = (event) => {
    setdepartment(event.target.value);
  };

  return (
    <Box
      sx={{ backgroundColor: "#1A202E", borderRadius: "15px", padding: "32px" }}
    >
      <SubNav content={"Edit Project"} />
      <Box component="form">
        <Grid
          container
          spacing={2}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Grid item md={6} xs={12}>
            <TextFieldStyle
              id="outlined-basic"
              label="Project Title*"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl
              sx={{
                width: "100%",
              }}
            >
              <InputLabel id="demo-simple-select-autowidth-label">
                Select Department*
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={Department}
                onChange={handleDapertmentChange}
                label="Age"
              >
                <MenuItem value={10}>software</MenuItem>
                <MenuItem value={21}>Web development</MenuItem>
                <MenuItem value={22}>Mobail app</MenuItem>
                <MenuItem value="">
                  <em>None of them</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            {" "}
            <TextFieldStyle label="Client*" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl sx={{ width: "100%", height: "50px", m: 0 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Price*
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={Department}
                onChange={handlePriceChange}
                label="Age"
              >
                <MenuItem value={10}>software</MenuItem>
                <MenuItem value={21}>Web development</MenuItem>
                <MenuItem value={22}>Mobail app</MenuItem>
                <MenuItem value="">
                  <em>None of them</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            {" "}
            <TextFieldStyle
              type="date"
              variant="outlined"
              name="startDate"
              label="Project Start Date*"
              fullWidth
              InputLabelProps={{
                sx: {
                  color: "#A4A6B3",
                },
              }}
              InputProps={{ style: { color: "#A4A6B3" } }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            {" "}
            <TextFieldStyle type="date" label="Project End Date*" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl sx={{ width: "100%", height: "50px", m: 0 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Team Leader
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={Department}
                onChange={handleTeamLeaderChange}
                label="Age"
              >
                <MenuItem value={10}>software</MenuItem>
                <MenuItem value={21}>Web development</MenuItem>
                <MenuItem value={22}>Mobail app</MenuItem>
                <MenuItem value="">
                  <em>None of them</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Team Member
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={Department}
                onChange={handleTeamMemberChange}
                label="Age"
              >
                <MenuItem value={10}>software</MenuItem>
                <MenuItem value={21}>Web development</MenuItem>
                <MenuItem value={22}>Mobail app</MenuItem>
                <MenuItem value="">
                  <em>None of them</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl sx={{ width: "100%", height: "50px", m: 0 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Category*
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={Department}
                onChange={handleCategoryChange}
                label="Age"
              >
                <MenuItem value={10}>software</MenuItem>
                <MenuItem value={21}>Web development</MenuItem>
                <MenuItem value={22}>Mobail app</MenuItem>
                <MenuItem value="">
                  <em>None of them</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl sx={{ width: "100%", height: "50px", m: 0 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Project Priority
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={Department}
                onChange={handleProjectPriorityChange}
                label="Age"
              >
                <MenuItem value={10}>software</MenuItem>
                <MenuItem value={21}>Web development</MenuItem>
                <MenuItem value={22}>Mobail app</MenuItem>
                <MenuItem value="">
                  <em>None of them</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl sx={{ width: "100%", height: "50px", m: 0 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Phases*
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={Department}
                onChange={handlePhasesChange}
                label="Age"
              >
                <MenuItem value={10}>software</MenuItem>
                <MenuItem value={21}>Web development</MenuItem>
                <MenuItem value={22}>Mobail app</MenuItem>
                <MenuItem value="">
                  <em>None of them</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <DiscriptionTitle>Description:</DiscriptionTitle>
        <Grid item md={12} xs={12}>
          <TextFieldStyle
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue="Description:"
            fullWidth
          />
        </Grid>
        <Box sx={{ display: "flex", alignItems: "left" }}>
          <Button
            sx={{
              backgroundColor: "#262E41",
              marginRight: "30px",
              color: "#9FA2B4;",
              marginTop: "30px",
            }}
          >
            Save
          </Button>
          <Button
            sx={{
              backgroundColor: "#262E41",
              marginRight: "30px",
              color: "#9FA2B4;",
              marginTop: "30px",
            }}
          >
            Cansale
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProject;
