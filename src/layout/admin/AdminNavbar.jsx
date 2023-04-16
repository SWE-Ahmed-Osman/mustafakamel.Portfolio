import React from 'react'
import { useContext } from 'react'
import AdminContext from '../../store/admin-ctx'

const AdminNavbar = () => {

  const title = useContext(AdminContext).title;

  return (
    <div className='admin_navbar'>
        {title}
    </div>
  )
}

export default AdminNavbar