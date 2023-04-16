import React, { useState, useEffect, useContext } from 'react';
import Feedbacks from '../../components/admin/Feedbacks';
import HomeCards from '../../components/admin//HomeCards';
import Orders from '../../components/admin//Orders';
import AdminContext from '../../store/admin-ctx';

const AdminHome = () => {

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
  ];
  const currentFeedbacks = [
    {
      id: 1,
      name: 'مصطفي كامل أحمد',
      comment: 'هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..',
      date: '22 ديسمبر',
      status: 'pennding'
    },
    {
      id: 2,
      name: 'مصطفي كامل أحمد',
      comment: 'هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..',
      date: '22 ديسمبر',
      status: 'approved'
    },
    {
      id: 3,
      name: 'مصطفي كامل أحمد',
      comment: 'هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..',
      date: '22 ديسمبر',
      status: 'canceled'
    },
  ];

  const ctx = useContext(AdminContext);
  const [orders, setOrders] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [numOfLiks, setNumOfLiks] = useState(0);
  const [numOfOrders, setNumOfOrders] = useState(0);
  const [numOfFeedbacks, setNumOfFeedbacks] = useState(0);


  useEffect(() => {
    setOrders(currentOrders);
    setFeedbacks(currentFeedbacks);
    setNumOfLiks(20);
    setNumOfOrders(10);
    setNumOfFeedbacks(14);
    ctx.setTitle('لوحة التحكم')
  }, []);


  return (
    <div>
      <HomeCards liks={numOfLiks} orders={numOfOrders} feedback={numOfFeedbacks} />
      <Orders oreders={orders}/>
      <Feedbacks feedbacks={feedbacks}/>
    </div>
  )
}

export default AdminHome