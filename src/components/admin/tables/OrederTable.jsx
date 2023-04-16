import React from 'react';
import Table from '../../../UI/table/Table';
import SingleOrder from './SingleOrder';

const OrederTable = ({ currentData }) => {

  const tableHeaders = ['الاسم', 'البريد الألكتروني', 'الميزانية', 'الجدول الزمني', 'التاريخ', 'الحالة'];


  return (
    <Table tableHead={tableHeaders}>
      {currentData.map((order, index) => <SingleOrder key={order.id} index={+index} {...order}/>)}
    </Table>
  )
}

export default OrederTable