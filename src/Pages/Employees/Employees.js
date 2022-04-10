import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Employee from "../../Components/Employee/Employee";
import SubNav from "../../Components/SubNav/SubNav";
import { EmployeeGrid } from "../../MuStyled/MuStyled";

const Employees = () => {
  const [Employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("./Employees.json")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <Box
      sx={{ backgroundColor: "#1A202E", padding: "30px", borderRadius: "15px" }}
    >
      <SubNav />

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        {Employees.map((Empl, index) => (
          <Grid item md={6} key={index}>
            <Employee data={Empl} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Employees;
