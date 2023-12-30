import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import SideBar from "../components/Sidebar";
import MainContent from "../components/MainContent";

import '../styles/dashboard.css'


function Dashboard() {
  const { user: { email } } = useContext(AuthContext);
  console.log(email);
  


  return (
    <div className="ds-container">
      <SideBar />
      <MainContent />
    </div>

  )
}

export default Dashboard