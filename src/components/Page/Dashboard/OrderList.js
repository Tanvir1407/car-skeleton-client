import React from 'react';

const OrderList = ({ order }) => {
    const handleOrderDelete = (id) => {
        fetch(`http://localhost:5500/order/${id}`, {
            method: "DELETE"
        })

    console.log(id)
    }
    return (
      <tr>
        <td>
          <div class="flex items-center space-x-3">
            <div>
              <div class="font-bold">{order.product}</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
                {order.name }
          <br />
        </td>
            <td>{order.quantity }</td>
        <th>
          <button class="btn btn-ghost btn-md" onClick={()=>handleOrderDelete(order._id)}>Delete</button>
        </th>
      </tr>
    );
};

export default OrderList;