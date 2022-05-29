import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const handleSubmit = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const rating = e.target.rating;
        e.target.reset();
        console.log(review,rating);
    }
    return (
      <div className="md:m-20">
        <h1 className="text-3xl font-bold">Add a Review </h1>
        <div className="text-2xl my-6">
          {user.displayName} <br />
          <span className="text-sm text-gray-400">{user.email}</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div class="rating">
            <input
              type="radio"
              name="rating"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating"
              class="mask mask-star-2 bg-orange-400"
              
            />
            <input
              type="radio"
              name="rating"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div>
            <textarea
              class="textarea textarea-bordered"
              name="review"
              rows="7"
              cols="50"
            ></textarea>
          </div>
          <div>
            {" "}
            <input className="btn " type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
};

export default AddReview;