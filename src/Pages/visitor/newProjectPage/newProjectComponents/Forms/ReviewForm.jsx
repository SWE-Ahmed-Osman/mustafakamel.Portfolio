import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '../../../../../UI/Buttons/Button';
import AdminCards from '../../../../../UI/Cards/AdminCards';
import { ArrowUpIcon, DateIcon, DollerIcon, MessageIcon, PaperIcon, UserNameIcon } from '../../../../../UI/Icons';
import { motion } from 'framer-motion';

const ReviewForm = props => {

  const {t, i18n} = useTranslation();

  const itnit = { y: 500, opacity: 0 };

  const animate = { y: 0, opacity: 1 };

  return (
    <>
      <div className='review_form'>
        <motion.div
          initial={itnit}
          animate={animate}
          transition={{type: 'spring', duration: 1, bounce: .3}}
        >
          <AdminCards>
            <div className='question_box'>
              <div className="question flex">
                <span>1</span>
                <p>{t('q1')}</p>
              </div>
              <p className="answer"><UserNameIcon />{props.name}</p>
            </div>
            <div className='question_box'>
              <div className="question flex">
                <span>2</span>
                <p>{t('q2')}</p>
              </div>
              <p className="answer"><MessageIcon />{props.email}</p>
            </div>
            <button onClick={() => props.onCurrentForm(0)}>Edit</button>
          </AdminCards>
        </motion.div>
        <motion.div
          initial={itnit}
          animate={animate}
          transition={{type: 'spring', duration: 1, bounce: .3, delay: .1}}
        >
          <AdminCards>
            <div className='question_box'>
              <div className="question flex">
                <span>3</span>
                <p>{t('q3')}</p>
              </div>
              <ul>
                {props.need.map(item => <li key={Math.random()}>{item}</li>)}
              </ul>
            </div>
            <div className='question_box'>
              <div className="question flex">
                <span>4</span>
                <p>{t('q4')}</p>
              </div>
              <p className="answer"><PaperIcon />{props.message}</p>
            </div>
            <button onClick={() => props.onCurrentForm(1)}>Edit</button>
          </AdminCards>      
        </motion.div>
        <motion.div
          initial={itnit}
          animate={animate}
          transition={{type: 'spring', duration: 1, bounce: .3, delay: .2}}
        >
          <AdminCards>
            <div className='question_box'>
              <div className="question flex">
                <span>5</span>
                <p>{t('q5')}</p>
              </div>
              <p className="answer"><DollerIcon />{props.budget}</p>
            </div>
            <div className='question_box'>
              <div className="question flex">
                <span>6</span>
                <p>{t('q6')}</p>
              </div>
              <p className="answer"><DateIcon />{props.timeLine}</p>
            </div>
            <button onClick={() => props.onCurrentForm(2)}>Edit</button>
          </AdminCards>
        </motion.div>
        <div className="form_btns flex">
          <button onClick={() => props.onCurrentForm(2)} className='btn_back' type='button'>{t('Back')}<ArrowUpIcon /></button>
          <Button onClick={() => {}} data={{type: 'submit'}} validation={true}>{t('Submit')}<ArrowUpIcon/></Button>
      </div>
      </div>
      <div>
    </div>
    </>
  )
}

export default ReviewForm