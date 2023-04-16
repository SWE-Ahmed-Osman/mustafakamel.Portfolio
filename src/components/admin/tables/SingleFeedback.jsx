import React, { useEffect, useState } from 'react';
import { AcceptIcon, RefuseIcon } from '../../../UI/Icons';
import { useNavigate } from 'react-router-dom';


const SingleFeedback = ({ index, name, comment, date, status, img, id }) => {

  const [state, setState] = useState('');
  const navigate= useNavigate();

  useEffect(() => {
    setState(status);
  }, [])

  return (
    <tr>
    <td>
      <div 
        className="flex" 
        style={{cursor: 'pointer'}}
        onClick={() => navigate(`/admin/allfeedbacks/${id}`)}
      >
        <span className='row_num'>
            <img src={img ? img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuigXD45DkkFU3159RAK53IMriiLLGUjNeFbqzPY&s'} alt="user_image" />
        </span>
        {name}
      </div>
    </td>
    <td style={{
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'block',
        overflow: 'hidden',
        width: '300px',
        lineHeight: '51px'
    }}>{comment}</td>
    <td>{date}</td>
    <td>
      {state === 'pennding' ?
        <div className='btns flex'>
          <button onClick={() => setState('approved')}><AcceptIcon/>قبول</button>
          <button onClick={() => setState('canceled')}><RefuseIcon/>رفض</button>
          </div> : state === 'approved' 
        ? 
          <span className='approved'>تم قبولة</span> 
        : 
          <span className='canceled'>تم رفضة</span>
          }
    </td>
  </tr>  
  )
}

export default SingleFeedback