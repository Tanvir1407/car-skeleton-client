import React from "react";

const OrderList = ({ order }) => {
  const handleOrderDelete = (id) => {
    fetch(`https://obscure-savannah-69297.herokuapp.com/order/${id}`, {
      method: "DELETE",
    });

    console.log(id);
  };
  return (
    <tr>
      <td>
        <div class="flex items-center space-x-3">
          <div>
            <div class="font-bold">{order.product}</div>
            
          </div>
        </div>
      </td>
      <td>
        {order.name}
        <br />
      </td>
      <td>{order.quantity}</td>
      <th>
        <button
          class="btn btn-ghost text-red-500 btn-md"
          onClick={() => handleOrderDelete(order._id)}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default OrderList;
