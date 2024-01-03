import SideBar from "../components/Sidebar";
import MainContent from "../components/MainContent";

import '../styles/pages/Home.css'

function Dashboard() {

  return (
    <div className="ds-container">
      <SideBar />
      <MainContent />
    </div>

  )
}

export default Dashboard