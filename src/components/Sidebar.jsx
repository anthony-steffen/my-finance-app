import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter, 
} from 'cdbreact';

// import { useContext } from "react"
// import AuthContext from "../contexts/AuthContext"

import '../styles/sidebar.css'

const SideBar = () => {

  // const { email } = useContext(AuthContext);

  return (
      <CDBSidebar>
        <CDBSidebarHeader 
        prefix={<i className="fa fa-bars" />}
        >
          Contrast
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  );
};

export default SideBar;