import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [parts, setParts] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5500/parts/${id}`)
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);

     

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const quantity = e.target.quantity.value;
        const product = e.target.productName.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;

        if (quantity > parts.quantity) {
            
            
        }
        else if (quantity < parts.minimumOrder) {
            window.alert('hi')
        }
        else {
            console.log(name,email,product,quantity,phone,address);

        }
    }
    return (
      <div className=" border-2 m-2 grid grid-cols-1 md:grid-cols-2 p-12">
        <div>
          <div class="card p-4 card-compact w-3/4 bg-base-100 shadow-xl">
            <h1 className="p-4 font-bold text-3xl text-accent">
              Parts Name: {parts.name}
            </h1>
            <figure>
              <img
                className="max-h-80 max-w-80"
                src={parts.picture}
                alt="partsPicture"
              />
            </figure>
            <div class="card-body">
              <h2 className="font-bold text-lg">Price: {parts.price}/per</h2>
              <h2 className="font-bold text-lg">Quantity: {parts.quantity}</h2>
              <h2 className="font-bold text-lg">
                Minimum Order: {parts.minimumOrder}
              </h2>
              <h1 className="font-bold text-center text-2xl">Description</h1>
              <p className=" text-lg">{parts.description}</p>
            </div>
          </div>
        </div>

        <div>
          <h1>Purchase</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold ">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full max-w-xs"
                disabled
                value={user.displayName}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold ">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                disabled
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold ">Product Name</span>
              </label>
              <input
                type="text"
                name="productName"
                value={parts.name}
                disabled
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold ">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold ">Quantity</span>
              </label>
              <input
                            type="number"
                name="quantity"
                className="input input-bordered w-full max-w-xs"
               />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold ">Address</span>
              </label>
              <input
                type="text"
                name="address"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="mt-2 btn w-full max-w-xs text-white">
              <input type="submit" value="Place Order" />
            </div>
          </form>
        </div>
      </div>
    );
};

export default Purchase;