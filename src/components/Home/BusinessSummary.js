import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica, faThumbsUp, faUsers } from "@fortawesome/free-solid-svg-icons";

import React from 'react';

const BusinessSummary = () => {
    return (
      <div className='py-12'>
        <h1 className="pb-20 leading-normal text-5xl font-bold mx-auto max-w-lg">
          A big number of People Trusted us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center lg:px-28">
          <div className="border-2 m-4 rounded-md px-6 py-3">
            <FontAwesomeIcon className="text-8xl p-4" icon={faEarthAmerica} />
            <h1 className="text-center text-4xl">120+</h1>
            <h1 className="text-2xl font-bold">Countries</h1>
          </div>
          <div className="border-2 m-4 rounded-md p-3">
            <FontAwesomeIcon className="text-8xl p-4" icon={faUsers} />
            <h1 className="text-center text-4xl">2k+</h1>
            <h1 className="text-2xl font-bold">Happy Clients</h1>
          </div>
          <div className="border-2 m-4 rounded-md px-6 py-3">
            <FontAwesomeIcon className="text-8xl p-4" icon={faThumbsUp} />
            <h1 className="text-center text-4xl">570+</h1>
            <h1 className="text-2xl font-bold">Feedbacks</h1>
          </div>
        </div>
      </div>
    );
};

export default BusinessSummary;