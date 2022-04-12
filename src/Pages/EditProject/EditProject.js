import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SubNav from "../../Components/SubNav/SubNav";
import { DiscriptionTitle, TextFieldStyle } from "../../MuStyled/MuStyled";

const EditProject = () => {
  const [Data, setData] = useState([]);

  // department field
  const Department = [
    {
      value: "web",
      label: "Web",
    },
    {
      value: "flutter",
      label: "Flutter",
    },
    {
      value: "software",
      label: "Software",
    },
  ];

  // Team Leader
  const TeamLeader = [
    {
      value: "A",
      label: "A",
    },
    {
      value: "B",
      label: "B",
    },
    {
      value: "C",
      label: "C",
    },
  ];
  // Team Member

  const TeamMember = [
    {
      value: "C",
      label: "C",
    },
    {
      value: "D",
      label: "D",
    },
    {
      value: "F",
      label: "F",
    },
  ];

  // Category
  const Category = [
    {
      value: "Application Software",
      label: "Application Software",
    },
    {
      value: "System Software",
      label: "System Software",
    },
    {
      value: "Programming Software",
      label: "Programming Software",
    },
  ];

  // Phases
  const Phases = [
    {
      value: "D",
      label: "D",
    },
    {
      value: "E",
      label: "E",
    },
    {
      value: "F",
      label: "F",
    },
  ];
  // priority
  const priority = [
    {
      value: "low",
      label: "Low",
    },
    {
      value: "medium",
      label: "Medium",
    },
    {
      value: "high",
      label: "High",
    },
  ];
  // stor data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data", Data);
  };
  return (
    <Box
      sx={{ backgroundColor: "#1A202E", borderRadius: "15px", padding: "32px" }}
    >
      <SubNav content={"Edit Project"} />
      <Box component="form" onSubmit={handleSubmit}>
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
            <TextFieldStyle
              fullWidth
              variant="outlined"
              required
              select
              SelectProps={{ native: true }}
              label="Department*"
              name="Project Priority"
              fullidth
              onChange={(e) =>
                setData({
                  ...Data,
                  [e.target.name]: e.target.value,
                })
              }
            >
              {Department.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextFieldStyle>
          </Grid>

          <Grid item md={6} xs={12}>
            <TextFieldStyle label="Client*" fullWidth />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextFieldStyle label="Price*" name="Price" fullWidth />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextFieldStyle
              type="date"
              fullWidth
              label="Start Date"
              name="startDate"
              focused
              InputLabelProps={{
                sx: {
                  color: "#A4A6B3",
                },
              }}
              InputProps={{ style: { color: "#A4A6B3" } }}
              onChange={(e) =>
                setData({
                  ...Data,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextFieldStyle
              type="date"
              focused
              label="End Date*"
              name="End Date"
              fullWidth
              onChange={(e) =>
                setData({
                  ...Data,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Grid>

          <Grid xs={12} sm={6} item>
            <TextFieldStyle
              fullWidth
              variant="outlined"
              label="Team Leader"
              name="Team Leader"
              required
              select
              SelectProps={{ native: true }}
              onChange={(e) =>
                setData({
                  ...Data,
                  [e.target.name]: e.target.value,
                })
              }
            >
              {TeamLeader.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextFieldStyle>
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextFieldStyle
              fullWidth
              variant="outlined"
              label="Team Member"
              name="Team Member"
              required
              select
              SelectProps={{ native: true }}
              onChange={(e) =>
                setData({
                  ...Data,
                  [e.target.name]: e.target.value,
                })
              }
            >
              {TeamMember.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextFieldStyle>
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextFieldStyle
              fullWidth
              variant="outlined"
              label="Category"
              name="Category"
              required
              select
              SelectProps={{ native: true }}
              onChange={(e) =>
                setData({
                  ...Data,
                  [e.target.name]: e.target.value,
                })
              }
            >
              {Category.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextFieldStyle>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextFieldStyle
              fullWidth
              variant="outlined"
              required
              select
              SelectProps={{ native: true }}
              label="Project Priority"
              name="Project Priority"
              fullidth
              onChange={(e) =>
                setData({
                  ...Data,
                  [e.target.name]: e.target.value,
                })
              }
            >
              {priority.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextFieldStyle>
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextFieldStyle
              fullWidth
              variant="outlined"
              label="Phases"
              name="Phases"
              required
              select
              SelectProps={{ native: true }}
              onChange={(e) =>
                setData({
                  ...Data,
                  [e.target.name]: e.target.value,
                })
              }
            >
              {Phases.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextFieldStyle>
          </Grid>
        </Grid>
        <DiscriptionTitle>Description:</DiscriptionTitle>
        <Grid item md={12} xs={12}>
          <TextFieldStyle
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue="Description"
            name="Description"
            fullWidth
            onChange={(e) =>
              setData({
                ...Data,
                [e.target.name]: e.target.value,
              })
            }
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
            type="submit"
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
