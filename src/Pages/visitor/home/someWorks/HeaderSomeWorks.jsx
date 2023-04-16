import React from 'react'
import TabsContainer from '../../../../UI/Buttons/Tabs/TabsContainer'
import SectionTitle from '../../../../UI/Titles/SectionTitle/SectionTitle'
import { useTranslation } from 'react-i18next';


const HeaderSomeWorks = () => {

  const {t, i18n} = useTranslation(); 

  return (
    <div className=" some_work_header container">
      <SectionTitle Title={t('some_works')} />
      <TabsContainer>
        <button className='active'>One</button>
        <button>Two</button>
      </TabsContainer>
    </div>
  )
}

export default HeaderSomeWorks