import React, { useState, useContext } from 'react';
import AdminCards from '../../../UI/Cards/AdminCards';
import { FileIcons, MessageIcon, PaperIcon, TrashDelete, UserNameIcon } from '../../../UI/Icons';
import RequestFooter from './RequestFooter';
import Overlay from '../../../UI/poppup/Overlay';
import Modal from '../../../UI/poppup/Modal';
import AdminContext from '../../../store/admin-ctx';
import { useEffect } from 'react';

const Request = props => {

  const ctx = useContext(AdminContext)
  const [showModal, setShowModal] = useState(false);
  const refuseProjet = () => {
    setShowModal(false);
    props.onCancelRequset();
  };

  useEffect(() => {
    ctx.setTitle(`طلب #${props.id}`)
  } ,[])

  
  return (
    <>
    <AdminCards>
      <div className='data'>
        <div className='flex'>
          <span className='row_num'>1</span>
          <p className='question'>ما هو أسمك ؟</p>
        </div>
        <p className='answer'>
          <UserNameIcon/>
          {props.name}
          </p>
      </div>
      <div className='data'>
        <div className='flex'>
          <span className='row_num'>2</span>
          <p className='question'>ما هو بريدك الألكتروني ؟</p>
        </div>
        <p className='answer'>
          <MessageIcon/>
          {props.email}
          </p>
      </div>
    </AdminCards>
    <AdminCards>
      <div className='data'>
        <div className='flex'>
          <span className='row_num'>3</span>
          <p className='question'>ماذا تحتاج ويمكنني مساعدتك فية ؟</p>
        </div>
        <div style={{display: 'flex', columnGap: '12px'}}>
          {props.needs.map(need => <p key={need} className='answer border_card'>{need}</p>)}
        </div>
      </div>
      <div className='data'>
        <div className='flex'>
          <span className='row_num'>4</span>
          <p className='question'>أخبرني أكثر عن مشروعك</p>
        </div>
        <p className='answer about_p'>
          <PaperIcon/>
          {props.aboutProject}
          </p>
      </div>
    </AdminCards>
    <AdminCards>
      <div className='data'>
        <div className='flex'>
          <span className='row_num'>5</span>
          <p className='question'>ما هي ميزانية مشروعك (بالدولار الأمريكي) ؟</p>
        </div>
        <p className='answer border_card'>{props.budget}</p>
      </div>
      <div className='data'>
        <div className='flex'>
          <span className='row_num'>6</span>
          <p className='question'>ما هو الجدول الزمني لمشروعك ؟</p>
        </div>
        <p className='answer border_card'>{props.time}</p>
      </div>
      <div className='data'>
        <div className='flex'>
          <span className='row_num'>7</span>
          <p className='question'> موجز المشروع !</p>
        </div>
        <p className='answer'>
          <FileIcons/>
          {props.file}
          </p>
      </div>
    </AdminCards>
    <RequestFooter onCancelRequset={() =>setShowModal(true)} onGetAnswered={props.onGetAnswered} email={props.email} status={props.status}/>
    <Overlay state={showModal} setState={setShowModal}/>
    <Modal state={showModal} setState={setShowModal}>
      {/* <div className='popup'>
        <h6>رفض الطلب</h6>
        <p>هل أنت متأكد من حذف هذا الطلب؟</p>
        <div style={{display: 'flex', columnGap: '12px', justifyContent: 'center'}}>
          <button onClick={refuseProjet} className='button_control cancel'><TrashDelete/>رفض الطلب</button>
          <button onClick={() => setShowModal(false)} className='button_control'>الغاء</button>
        </div>
      </div> */}
      <div className="admin_modal">
          <h3>رفض الطلب</h3>
          <p>هل أنت متأكد من هذا حذف التصميم؟</p>
          <div className="btns flex">
            <button onClick={() => setShowModal(false)}>إلغاء</button>
            <button 
              className='cancel_btn' 
              onClick={refuseProjet}
            >
              <TrashDelete/>رفض الطلب
            </button>
          </div>
        </div>
    </Modal> 
    </>
  )
}

export default Request