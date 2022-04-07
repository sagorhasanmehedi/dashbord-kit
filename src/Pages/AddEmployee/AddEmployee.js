import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HomeIcon from "@mui/icons-material/Home";
import { styled } from "@mui/material/styles";
import "./AddEmployee.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const AddEmployee = () => {
  // TextField style
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#D6E4EC",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#D6E4EC",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#D6E4EC",
      },
      "&:hover fieldset": {
        borderColor: "#D6E4EC",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#D6E4EC",
      },
    },
  });

  // uplode button style
  const ButtonStyled = styled(Button)({});

  // select button style
  const CelectButtonStyle = styled(Button)({
    border: "2px solid #3F51B5",
    color: "#FBFBFB",
    backgroundColor: "#3F51B5",
    padding: "0px 10px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "700",
    display: "flex",
    alignContent: "flex-start",
    textTransform: "capitalize",
    hight: "27px",
  });

  // get gender
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // get depertment
  const [Department, setdepartment] = React.useState("");

  const handleDapertmentChange = (event) => {
    setdepartment(event.target.value);
  };

  // get date
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  const setStartDate = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ p: 3, backgroundColor: "#1A202E", borderRadius: "15px" }}
      className="home-main-bg"
    >
      {/* Heading Start */}
      <Box
        sx={{
          mb: 4,
          color: "#A4A6B3",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Add Employee</Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Link to="/addprojects">
            <AddBoxIcon sx={{ color: "A4A6B3" }} />
          </Link>
          <Link to="/home">
            <HomeIcon sx={{ mx: 1 }} />
          </Link>
          <ArrowForwardIosIcon sx={{ fontSize: "12px ", mx: 1 }} />
          <Typography
            variant="body1"
            sx={{ mx: 1, color: "#A4A6B3", fontSize: "14px" }}
          >
            {" "}
            Projects
          </Typography>
          <ArrowForwardIosIcon sx={{ fontSize: "12px ", mx: 1 }} />
          <Typography
            variant="body1"
            sx={{ color: "#A4A6B3", fontSize: "14px" }}
          >
            Add Projects
          </Typography>
        </Box>
      </Box>
      {/* Heading end */}

      {/* TextField start */}
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item xs={12} md={6}>
          <CssTextField
            label="Project ID*"
            sx={{ width: "100%", height: "50px" }}
            id="custom-css-outlined-input"
            inputProps={{ style: { color: "#A4A6B3" } }}
            focused
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField
            sx={{ width: "100%", height: "50px" }}
            label="Last Name*"
            id="custom-css-outlined-input"
            InputLabelProps={{
              sx: {
                color: "#A4A6B3",
              },
            }}
            inputProps={{ style: { color: "#A4A6B3" } }}
          />{" "}
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl sx={{ width: "100%", height: "50px", m: 0 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              {" "}
              Gender*
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={10}>Woman.</MenuItem>
              <MenuItem value={21}>Man.</MenuItem>
              <MenuItem value={22}>Transgender.</MenuItem>
              <MenuItem value="">
                <em>None of them</em>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField
            sx={{ width: "100%", height: "50px" }}
            label=" Mobile*"
            id="custom-css-outlined-input"
            InputLabelProps={{
              sx: {
                color: "#A4A6B3",
              },
            }}
            inputProps={{ style: { color: "#A4A6B3" } }}
          />{" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField
            sx={{ width: "100%", height: "50px" }}
            label="Password*"
            id="custom-css-outlined-input"
            InputLabelProps={{
              sx: {
                color: "#A4A6B3",
              },
            }}
            inputProps={{ style: { color: "#A4A6B3" } }}
          />{" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField
            sx={{ width: "100%", height: "50px" }}
            label="Re-Enter Password*"
            id="custom-css-outlined-input"
            InputLabelProps={{
              sx: {
                color: "#A4A6B3",
              },
            }}
            inputProps={{ style: { color: "#A4A6B3" } }}
          />{" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField
            sx={{ width: "100%", height: "50px" }}
            label="Desigation"
            id="custom-css-outlined-input"
            InputLabelProps={{
              sx: {
                color: "#A4A6B3",
              },
            }}
            inputProps={{ style: { color: "#A4A6B3" } }}
          />{" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl sx={{ width: "100%", height: "50px", m: 0 }}>
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
        <Grid item xs={12} md={12}>
          <CssTextField
            sx={{ width: "100%", height: "50px" }}
            label="Address"
            id="custom-css-outlined-input"
            InputLabelProps={{
              sx: {
                color: "#A4A6B3",
              },
            }}
            inputProps={{ style: { color: "#A4A6B3" } }}
          />{" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField
            sx={{ width: "100%", height: "50px" }}
            label="Email*"
            id="custom-css-outlined-input"
            InputLabelProps={{
              sx: {
                color: "#A4A6B3",
              },
            }}
            inputProps={{ style: { color: "#A4A6B3" } }}
          />{" "}
        </Grid>
        <Grid item xs={12} md={6}>
        

          <CssTextField
            type="date"
            variant="outlined"
            name="startDate"
            fullWidth
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              sx: {
                color: "#A4A6B3",
              },
            }}
            InputProps={{ style: { color: "#A4A6B3" } }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <CssTextField
            sx={{ width: "100%", height: "50px" }}
            label="Education"
            id="custom-css-outlined-input"
            InputLabelProps={{
              sx: {
                color: "#A4A6B3",
              },
            }}
            inputProps={{ style: { color: "#A4A6B3" } }}
          />
        </Grid>
      </Grid>

      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "400",
          marginY: "30px",
          color: "#A4A6B3",
          textAlign: "left",
          lineHeight: "13.57px",
        }}
      >
        Description:
      </Typography>

      <CssTextField
        type="text"
        label="Description"
        variant="outlined"
        multiline
        fullWidth
        rows={4}
        name="description"
        InputLabelProps={{
          sx: {
            color: "#A4A6B3",
          },
        }}
        InputProps={{ style: { color: "#A4A6B3" } }}
      />

      {/* image uplode */}
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "400",
          marginY: "30px",
          color: "#A4A6B3",
          textAlign: "left",
          lineHeight: "13.57px",
        }}
      >
        Upload Image
      </Typography>

      <div className="choose-file">
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            sx={{ display: "none" }}
          />
          <CelectButtonStyle variant="contained">Choose File</CelectButtonStyle>

          <p className="fileUplode-text">or drag and drop file here</p>
        </label>
      </div>

      <Box sx={{ display: "flex", gap: "20px", marginTop: "23px" }}>
        <Button
          sx={{
            borderRadius: "8px",
            backgroundColor: "#7480FF",
            width: "76px",
            maxHeight: "32px",
          }}
          variant="contained"
          color="info"
        >
          Submit
        </Button>
        <Button
          sx={{
            borderRadius: "8px",
            backgroundColor: "#7480FF",
            width: "76px",

            maxHeight: "32px",
          }}
          variant="contained"
        >
          Cancel
        </Button>
      </Box>

      {/* file uplode */}
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "400",
          marginY: "30px",
          color: "#A4A6B3",
          textAlign: "left",
          lineHeight: "13.57px",
        }}
      >
        Upload File
      </Typography>

      <div className="choose-file">
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            sx={{ display: "none" }}
          />
          <CelectButtonStyle variant="contained">Choose File</CelectButtonStyle>

          <p className="fileUplode-text">or drag and drop file here</p>
        </label>
      </div>

      <Box sx={{ display: "flex", gap: "20px", marginTop: "23px" }}>
        <ButtonStyled
          sx={{
            borderRadius: "8px",
            backgroundColor: "#7480FF",
            width: "76px",
            maxHeight: "32px",
          }}
          variant="contained"
        >
          Submit
        </ButtonStyled>
        <Button
          sx={{
            borderRadius: "8px",
            backgroundColor: "#7480FF",
            width: "76px",
            maxHeight: "32px",
          }}
          variant="contained"
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default AddEmployee;
