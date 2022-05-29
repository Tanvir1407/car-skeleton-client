import React from 'react';

const ManageCard = ({part}) => {
        const {
          _id,
          name,
          picture,
          minimumOrder,
          quantity,
          price,
        } = part;
    const handleDelete = (id) => {

        fetch(`http://localhost:5500/tools/${id}`, {
          method: "DELETE",
        }).then(res => res.json())
        .then(data=>console.log(data))
    }
    return (
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Car Parts" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl">{name}</h2>
          <h4 className="font-bold text-secondary">Price: {price} /per</h4>
          <h5 className="font-semibold">Quantity: {quantity}</h5>
          <h5 className="font-semibold">Minimum Order: {minimumOrder} pices</h5>
          <div class="card-actions justify-center">
            <button
              
              className="btn btn-sm btn-outline "
            >
              Update
            </button>
            <button
              onClick={()=>handleDelete(_id)}
              className="btn btn-sm  "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
};

export default ManageCard;