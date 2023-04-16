import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleOrder = ({ index, name, email, budget, time, date, status, id }) => {
  
  const navigate = useNavigate();
  
  return (
    <tr>
      <td 
      style={{cursor: 'pointer'}}
      onClick={() => navigate(`/admin/requests/${id}`)}
      >
        <span className='row_num'>{index + 1}</span>
        {name}
        </td>
      <td>{email}</td>
      <td>{budget}</td>
      <td>{time}</td>
      <td>{date}</td>
      <td>
        {status === 'pennding' ? 
          <span className='pennding'>في الأنتظار</span> 
        : status === 'approved' ?
         <span className='approved'>تم الرد</span> 
        : 
         <span className='canceled'>تجاهلتة</span>
         }
      </td>
    </tr>     
  )
}

export default SingleOrder