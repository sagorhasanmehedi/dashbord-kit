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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/home" element={<Home />} />
          <Route path="/addprojects" element={<AddProjects />} />
          {/* <Route path="/editproject" element={<EditProjects />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editemploy" element={<EditEmployee />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/editproject" element={<EditProject />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
