import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import TaskBar from "./TaskBar";
import Project from "./Project";
import Content from "./Dashboard/Content";
import { RiDashboard2Line } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { MdTask } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import LeaveManagement from "./LeaveManagent";
import Client from "./Client/Client";
import { CiLogout } from "react-icons/ci";

function Landingg() {
  const [navOpen, setNavOpen] = useState(true);

  const toggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <Router>
      <div className="main_div d-flex">
        {!navOpen && (
          <div>
            <div className="top_barbefore" style={{ flex: 2 }}>
              <button onClick={toggle} className="menu_bar">
                <IoMenu />
              </button>
            </div>
          </div>
        )}

        <div className={`sidenav ${navOpen ? "open" : ""}`}>
          {navOpen && (
            <>
              <div className="top_bar">
                <h1>EMS</h1>
                <button onClick={toggle} className="cross_bar">
                  <RxCross2 />
                </button>
              </div>
              <div className="sticky d-flex-col" style={{ flexGrow: 1 }}>
                <Link to="/customer"><span><RiDashboard2Line /></span>DashBoard</Link>
                <Link to="/project"> <span><AiOutlineProject/></span>Projects</Link>
                <Link to="/client"><span><IoIosPeople/></span>Client</Link>
                <Link to="/task_bar"><span><MdTask/></span>TaskBar</Link>
                <Link to="/leave_management"><span><FaCalendarAlt/></span>Leave Management</Link>
                <div className="log_out" style={{position:"relative", top:"230px"}}>
                <Link to="/"><span><CiLogout/></span>LogOut</Link>
              </div>
              </div>
            </>
          )}
        </div>
        <div className="content" style={{ flex: 0, top:"150px" }}>
          <Routes>
            <Route path="/customer" element={<Content />}></Route>
            <Route path="/task_bar" element={<TaskBar />} />
            <Route path="/project" element={<Project />} />
            <Route path="/client" element={<Client />} />
            <Route path="/leave_management" element={<LeaveManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Landingg;
