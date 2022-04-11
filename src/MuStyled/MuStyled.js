import { styled } from "@mui/material/styles";

import {
  AppBar,
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { grid } from "@mui/system";

export const EmployeesBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#262E41",
  borderRadius: "15px",
  textAlign: "left",
  padding: "30px",
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  color: "#A4A6B3",
  fontSize: "1.25rem",
}));

export const EmployeeButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7480FF",

  height: "32px",
  color: "#FBFBFB",
  alignItems: "center",
  padding: "8px 12px",
  fontSize: "12px",
  borderRadius: "8px",
  marginRight: "11px",
  boxShadow: theme.shadows[1],
}));

export const TextFieldStyle = styled(TextField)(({ theme }) => ({
  "& label": {
    color: "#A4A6B3",
  },
  "& label.Mui-focused": {
    color: "#ffffff",
    backgroundColor: "#3F51B5",
    padding: "0px 15px",
    borderRadius: "20px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #D6E4EC",
    },

    "&:hover fieldset": {
      border: "1px solid #D6E4ECB3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#D6E4EC",
    },
  },

  "& .MuiOutlinedInput-input": {
    color: "#A4A6B3",
  },
  marginTop: "10px",
}));

export const DiscriptionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "17px",
  fontWeight: "400",
  lineHeight: "13px",
  letterSpacing: "0.17px",
  textAlign: "left",
  margin: "30px 0",
  color: "#A4A6B3",
}));

export const CelectButtonStyle = styled(Button)({
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
