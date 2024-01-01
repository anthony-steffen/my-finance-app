import SideBar from "../components/Sidebar";
import MainContent from "../components/MainContent";

import '../styles/home.css'

function Dashboard() {

  return (
    <div className="ds-container">
      <SideBar />
      <MainContent />
    </div>

  )
}

export default Dashboard