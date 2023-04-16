import React from 'react'
import { NavLink } from "react-router-dom";
import DropMenu from '../../../../UI/dropdownMenu/DropMenu'
import { CaseStudyIcon, UIICon } from "../../../../UI/Icons";
import { useTranslation } from "react-i18next";

const DropPortfMenu = ({ setShowDropDown, showDropMenu, id, onCloseMenu }) => {

  const { t, i18n } = useTranslation();

  return (
    <DropMenu
      state={showDropMenu}
      setState={setShowDropDown}
      id={id}
    >
      <li>
        <NavLink
          onClick={onCloseMenu} 
          className={`navlink ${(navData) => navData.isActive ? 'active' : '' }`} 
          to='/ui'>
          <UIICon/>
          {t('Ui_Desings')}
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={onCloseMenu} 
          className={`navlink ${(navData) => navData.isActive ? 'active' : '' }`} 
          to='/cases'>
      <CaseStudyIcon/>
      {t('Case_Studies')}
    </NavLink>
      </li>
    </DropMenu>
  )
}

export default DropPortfMenu