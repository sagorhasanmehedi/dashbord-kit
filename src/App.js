import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddProjects from "./Pages/AddProjects/AddProjects";
import EditProjects from "./Pages/EditProjects/EditProjects";
import AddEmployee from "./Pages/AddEmployee/AddEmployee";
import EditEmployee from "./Pages/EditEmployee/EditEmployee";
import Employees from "./Pages/Employees/Employees";
import EditProject from "./Pages/EditProject/EditProject";
import ProjectsDetails from "./Pages/ProjectsDetails/ProjectsDetails";
import EmployeeProfile from "./Pages/EmployeeProfile/EmployeeProfile";
import AddCilent from "./Pages/AddCilent/AddCilent";
import EditClient from "./Pages/EditClient/EditClient";
import EmployeeProfileSetting from "./Pages/EmployeeProfileSetting/EmployeeProfileSetting";
import ClientProfile from "./Pages/ClientProfile/ClientProfile";
import ClientProfileSetting from "./Pages/ClientProfileSetting/ClientProfileSetting";
import Invoice from "./Pages/Invoice/Invoice";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/home" element={<Home />} />
          <Route path="/addprojects" element={<AddProjects />} />
          <Route path="/editproject" element={<EditProject />} />
          <Route path="/projectdetails" element={<ProjectsDetails />} />
          {/* <Route path="/editproject" element={<EditProjects />} /> */}
          <Route path="/employees" element={<Employees />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editemploy" element={<EditEmployee />} />
          <Route path="/editemploy" element={<EditEmployee />} />
          <Route path="/employeeprofile" element={<EmployeeProfile />} />
          <Route
            path="/employeeprofilesetting"
            element={<EmployeeProfileSetting />}
          />
          <Route path="/addcilent" element={<AddCilent />} />
          <Route path="/editclient" element={<EditClient />} />
          <Route path="/clientprofile" element={<ClientProfile />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route
            path="/clientprofilesetting"
            element={<ClientProfileSetting />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
