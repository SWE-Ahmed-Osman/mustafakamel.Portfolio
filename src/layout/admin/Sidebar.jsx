import React from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HomeAdminIcon, LogoDarkAR } from "../../UI/Icons";



const Sidebar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='admin_sidebar'>
      <div>
      <div className='logo'>
        <NavLink to='/'>
          <LogoDarkAR/>
        </NavLink>
      </div>
      <div className='card_mostatfa'>Main Card</div>
      <ul>
        <li>
          <NavLink
            className={navData => navData.isActive ? 'active' : '' }
            to='/admin'
          >
          <HomeAdminIcon/>
          لوحة التحكم
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navData => navData.isActive ? 'active' : '' }
            to='requests'
          >
            <HomeAdminIcon/>
            طلبات العمل
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navData => navData.isActive ? 'active' : '' }
            to='allfeedbacks'
          >
            <HomeAdminIcon/>
            أراء الناس
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navData => navData.isActive ? 'active' : '' }
            to='uiProjects'
          >
            <HomeAdminIcon/>
            تصميمات الواجهات
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navData => navData.isActive ? 'active' : '' }
            to='casesproejects'
          >
            <HomeAdminIcon/>
            دراسة الحالات 
          </NavLink>
        </li>
        <li style={{ cursor: 'pointer' }} onClick={() => setShowMenu(prev => !prev)}>
          كل الصفحات    
          {showMenu && 
            <ul>
              <li>
                <NavLink
                  className={navData => navData.isActive ? 'active' : '' }
                  to='homedata'
                  >الرئيسية</NavLink>
              </li>
              <li>
                <NavLink
                  className={navData => navData.isActive ? 'active' : '' }
                  to='aboutdata'>معلومات عني</NavLink>
              </li>
              <li>
                <NavLink
                  className={navData => navData.isActive ? 'active' : '' }
                  to='resumedata'>سيرتي الذاتية</NavLink>
              </li>
            </ul>
            }
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar