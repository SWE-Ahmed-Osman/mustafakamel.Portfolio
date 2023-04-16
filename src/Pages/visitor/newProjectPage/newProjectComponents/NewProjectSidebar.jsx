import React from 'react'
import { useTranslation } from 'react-i18next';
import { BriefIcon, BudgetIcon, PhoneIcon } from '../../../../UI/Icons';


import './newSidebar.css';

function NewProjectSidebar(props) {

  const {t, i18n} = useTranslation();

  const active = <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.4114 0C7.36238 0 0 7.14931 0 15.9398C0 24.7302 7.36238 31.8795 16.4114 31.8795C25.4605 31.8795 32.8229 24.7229 32.8229 15.9398C32.8229 7.15663 25.4605 0 16.4114 0ZM25.5833 11.7434L15.0923 21.8489C14.7915 22.1429 14.3897 22.3109 13.969 22.3183C13.5484 22.3257 13.1409 22.172 12.8299 21.8887L7.28024 16.9758C6.96795 16.6953 6.77959 16.3023 6.75642 15.8832C6.73325 15.464 6.87716 15.0527 7.15663 14.7394C7.45549 14.4306 7.86236 14.2497 8.2918 14.2345C8.72124 14.2194 9.13986 14.3712 9.45976 14.6581L13.8611 18.5723L23.2387 9.46383C23.5515 9.15653 23.9725 8.98435 24.411 8.98435C24.8495 8.98435 25.2705 9.15653 25.5833 9.46383C25.7395 9.60975 25.864 9.78623 25.9492 9.9823C26.0343 10.1784 26.0783 10.3898 26.0783 10.6036C26.0783 10.8174 26.0343 11.0288 25.9492 11.2249C25.864 11.421 25.7395 11.5974 25.5833 11.7434Z" fill="white"/>
  </svg>;


  const setOneDone = props.onActivce === 1 || props.onActivce === 2 || props.onActivce === 3; 
  const seTwoDone = props.onActivce === 2 || props.onActivce === 3; 
  const seThreeDone = props.onActivce === 3; 


  return (
    <div className='sidebar_newproject'>
      <svg width="280" height="121" viewBox="0 0 280 121" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71.531 0H70.877V89.901H71.531V0Z" fill="#C7C7C7"/>
        <path d="M44.5264 115.619L46.6764 120.338H95.7444L97.8814 115.619L76.9944 101.156H65.4204L44.5264 115.619Z" fill="#C9BED4"/>
        <path d="M63.9688 87.2285L65.4198 101.156H76.9938L78.4448 87.2285H63.9688Z" fill="#C9BED4"/>
        <path opacity="0.1" d="M44.5322 115.617L46.6762 120.336H95.7512L97.8882 115.617H44.5322Z" fill="black"/>
        <path opacity="0.1" d="M65.4197 101.156L65.2627 99.656L77.2357 98.793L76.9937 101.152L65.4197 101.156Z" fill="black"/>
        <path d="M27.0046 0H26.3506V61.61H27.0046V0Z" fill="#C7C7C7"/>
        <path d="M0 87.3251L2.14999 92.0441H51.218L53.355 87.3251L32.468 72.8691H20.89L0 87.3251Z" fill="#C9BED4"/>
        <path d="M19.4434 58.9375L20.8944 72.8715H32.4684L33.9194 58.9375H19.4434Z" fill="#C9BED4"/>
        <path opacity="0.1" d="M0.00683594 87.332L2.15085 92.044H51.2188L53.3628 87.332H0.00683594Z" fill="black"/>
        <path opacity="0.1" d="M20.8936 72.8705L20.7236 71.2565L32.7166 70.4785L32.4686 72.8705H20.8936Z" fill="black"/>
        <path d="M253.031 0H252.377V89.901H253.031V0Z" fill="#C7C7C7"/>
        <path d="M226.026 115.619L228.176 120.338H277.244L279.381 115.619L258.494 101.156H246.92L226.026 115.619Z" fill="#C9BED4"/>
        <path d="M245.469 87.2285L246.92 101.156H258.494L259.945 87.2285H245.469Z" fill="#C9BED4"/>
        <path opacity="0.1" d="M226.032 115.617L228.176 120.336H277.251L279.388 115.617H226.032Z" fill="black"/>
        <path opacity="0.1" d="M246.92 101.156L246.763 99.656L258.736 98.793L258.494 101.152L246.92 101.156Z" fill="black"/>
        <path d="M208.505 0H207.851V61.61H208.505V0Z" fill="#C7C7C7"/>
        <path d="M181.5 87.3251L183.65 92.0441H232.718L234.855 87.3251L213.968 72.8691H202.39L181.5 87.3251Z" fill="#C9BED4"/>
        <path d="M200.943 58.9375L202.394 72.8715H213.968L215.419 58.9375H200.943Z" fill="#C9BED4"/>
        <path opacity="0.1" d="M181.507 87.332L183.651 92.044H232.719L234.863 87.332H181.507Z" fill="black"/>
        <path opacity="0.1" d="M202.394 72.8705L202.224 71.2565L214.217 70.4785L213.969 72.8705H202.394Z" fill="black"/>
      </svg>
    <div className='btns_container'>
      <button disabled className={`form_btn ${props.onActivce === 0 ? 'active' : ''} ${setOneDone ? 'done' : ''}`} onClick={()=> props.onCurrentForm(0)}>
        <div><PhoneIcon/>{t('Contact_info')}</div>
        {setOneDone ? active : <span>1</span>}
      </button>
      <button disabled className={`form_btn ${props.onActivce === 1 ? 'active' : ''} ${seTwoDone ? 'done' : ''}`} onClick={()=> props.onCurrentForm(1)}>
        <div><BriefIcon/>{t('project_Brief')}</div>
        {seTwoDone ? active : <span>2</span>}
      </button>
      <button disabled className={`form_btn ${props.onActivce === 2 ? 'active' : ''} ${seThreeDone ? 'done' : ''}`} onClick={()=> props.onCurrentForm(2)}>
        <div><BudgetIcon/>{t('Budget_Timeline')}</div>
        {seThreeDone ? active : <span>3</span>}
      </button>
    </div>
    </div>
  )
}

export default NewProjectSidebar