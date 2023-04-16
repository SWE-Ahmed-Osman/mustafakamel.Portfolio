import React from 'react'
import { NavLink } from "react-router-dom";
import AdminCards from '../../UI/Cards/AdminCards';
import OrederTable from './tables/OrederTable';


const Orders = ({ oreders }) => {

  return (
    <AdminCards>
      <div className=' oreder_container_header flex'>
        <h3 className='title'>طلبات العملاء</h3>
        <NavLink to='requests'>عرض الكل</NavLink>
      </div>
      <OrederTable currentData={oreders}/>
    </AdminCards>
  );
};

export default Orders