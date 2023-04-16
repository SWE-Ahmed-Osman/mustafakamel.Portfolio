import React from 'react'
import { CancelIcon, SendIcon } from '../../../UI/Icons';

const RequestFooter = props => {


  return (
    <div 
    style={{
      display: 'flex', columnGap: '12px', justifyContent: 'center', padding: '16px', backgroundColor: '#F3F3F3', position: 'absolute', right: '0', width: '100%', zIndex: '-1'
    }}
    >
      <span className={props.status}>
        {props.status === 'pennding'? 'في الأنتظار' : props.status === 'approved' ? 'تم الرد' : 'تجاهلتة'}
      </span>
      <button onClick={() => props.onGetAnswered()} className='button_control'>
        <a href={`mailto:${props.email}`}><SendIcon/>إرسال إيميل</a>
      </button>
      <button onClick={() => props.onCancelRequset()} className='button_control cancel'><CancelIcon/>رفض الطلب</button>
    </div>
  )
}

export default RequestFooter