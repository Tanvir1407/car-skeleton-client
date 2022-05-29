import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import OrderList from './OrderList';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5500/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [])
    
    return (
        <>
<div class="overflow-x-auto w-full">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Order By</th>
        <th>Quanttity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
            {
                myOrder.map(order =><OrderList key={order._id} order={order}></OrderList>)
            }
    </tbody>  
  </table>
</div>
</>
    );
};

export default MyOrders;