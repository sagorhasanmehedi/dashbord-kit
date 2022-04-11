import AddBoxIcon from "@mui/icons-material/AddBox";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Typography } from "@mui/material";
import { SubTitle } from "../../MuStyled/MuStyled";
import React from "react";

const SubNav = ({ content }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        color: "#A4A6B3",
        marginBottom: "30px",
      }}
    >
      <SubTitle>{content}</SubTitle>
      <Box>
        <AddBoxIcon sx={{ color: "A4A6B3" }} />
        <HomeIcon sx={{ mx: 1, marginLeft: "19px" }} />
      </Box>
    </Box>
  );
};

export default SubNav;
