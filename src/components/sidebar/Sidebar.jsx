import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './sidebar.scss' ;
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className='top'> 
      <Link to = "/" style={{textDecoration:"none"}}>
      <span className='logo'>Tophiladmin</span>
      </Link>
      
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to= "/users" style={{textDecoration:"none"}}>
          <li>
            <PeopleOutlinedIcon className='icon'/>
            <span>Users</span>
          </li>
          </Link>
          <Link to= "/products" style={{textDecoration:"none"}}>
          <li>
        <Inventory2OutlinedIcon className='icon'/>
            <span>Products</span>
          </li>
          </Link>
          
          <li>
         <CreditCardIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <BarChartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            < NotificationsIcon className='icon' /> 
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            < SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            < AccountCircleRoundedIcon  className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            < LogoutRoundedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        
      </div>

    </div>
  )
}

export default Sidebar