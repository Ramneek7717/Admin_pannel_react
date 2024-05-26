import React from 'react'
import "./Topbar.css"
import {NotificationsNone,Language,Settings} from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>Admin pannel</span>
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className='topIconBadge'>2</span>
                </div> 
                <div className="topbarIconContainer">
                <Language/>
                </div>
                <div className="topbarIconContainer">
                <Settings/>
                </div>
                <img src="https://source.unsplash.com/3tYZjGSBwbk" alt="image" className="topAvatar" /> 
            </div>
        </div>
      
    </div>
  )
}
