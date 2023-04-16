import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import AdminContext from '../../store/admin-ctx';
import AdminCards from '../../UI/Cards/AdminCards';
import OrederTable from '../../components/admin/tables/OrederTable';
import { useState } from 'react';

const Requests = () => {

  const currentOrders = [
    {
      id: 1,
      name: 'مصطفي كامل أحمد',
      email: 'mostafa.kamel95@example.com',
      budget: '1 - 2 ألف',
      time: '5 - 4 أشهر',
      date: '22 ديسمبر',
      status: 'pennding'
    },
    {
      id: 2,
      name: 'مصطفي كامل أحمد',
      email: 'mostafa.kamel95@example.com',
      budget: '1 - 2 ألف',
      time: '5 - 4 أشهر',
      date: '22 ديسمبر',
      status: 'approved'
    },
    {
      id: 3,
      name: 'مصطفي كامل أحمد',
      email: 'mostafa.kamel95@example.com',
      budget: '1 - 2 ألف',
      time: '5 - 4 أشهر',
      date: '22 ديسمبر',
      status: 'canceled'
    },
    {
      id: 4,
      name: 'مصطفي كامل أحمد',
      email: 'mostafa.kamel95@example.com',
      budget: '1 - 2 ألف',
      time: '5 - 4 أشهر',
      date: '22 ديسمبر',
      status: 'canceled'
    },
    {
      id: 5,
      name: 'مصطفي كامل أحمد',
      email: 'mostafa.kamel95@example.com',
      budget: '1 - 2 ألف',
      time: '5 - 4 أشهر',
      date: '22 ديسمبر',
      status: 'canceled'
    },
    {
      id: 6,
      name: 'مصطفي كامل أحمد',
      email: 'mostafa.kamel95@example.com',
      budget: '1 - 2 ألف',
      time: '5 - 4 أشهر',
      date: '22 ديسمبر',
      status: 'canceled'
    },
    {
      id: 7,
      name: 'مصطفي كامل أحمد',
      email: 'mostafa.kamel95@example.com',
      budget: '1 - 2 ألف',
      time: '5 - 4 أشهر',
      date: '22 ديسمبر',
      status: 'canceled'
    },
  ];

  const ctx = useContext(AdminContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    ctx.setTitle('طلبات العمل');
    setOrders(currentOrders);
  }, [])



  return (
    <AdminCards>
      <OrederTable currentData={orders}/>
    </AdminCards>
  )
}

export default Requests