import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { EmployeeButton, EmployeesBox } from "../../MuStyled/MuStyled";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Employee = ({ data }) => {
  console.log(data.image);
  const options = ["None", "Atria"];

  const ITEM_HEIGHT = 48;

  // select menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <EmployeesBox>
      <Grid container spacing={1}>
        <Grid item md={4}>
          <img
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #FFFFFF",
            }}
            src={data.image}
            alt=""
          />
          <Typography
            sx={{
              fontSize: "12px",
              color: "#A4A6B3",
              letterSpacing: "0.3px",
              marginTop: "2px",
              fontWeight: "700",
              marginLeft: "21px",
            }}
          >
            E.ID MDX 001
          </Typography>
        </Grid>
        <Grid item md={8}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#A4A6B3",
                  fontWeight: "700",
                }}
              >
                {data.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#A4A6B3",
                  fontWeight: "700",
                }}
              >
                {data.post}
              </Typography>
            </Box>

            <Box>
              <div>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  sx={{ color: "#A4A6B3" }}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      selected={option === "Pyxis"}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: "11px",
              color: "#A4A6B3",
              fontWeight: "300",
              lineHeight: "14.19px",
              textAlign: "left",
              margin: "25px 0 22px 0",
            }}
          >
            {data.details}
          </Typography>
          <EmployeeButton>Add Task</EmployeeButton>
          <EmployeeButton>Profile</EmployeeButton>
        </Grid>
      </Grid>
    </EmployeesBox>
  );
};

export default Employee;
