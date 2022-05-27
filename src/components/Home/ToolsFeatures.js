import React, { useEffect, useState } from 'react';
import PartsCard from './PartsCard';

const ToolsFeatures = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('toolsData.json')
            .then(res => res.json())
            .then(data => setParts(data))
    },[])
    return (
      <div className="bg-gray-100 md:px-12">
        <h1 className="text-center text-3xl py-16 underline underline-offset-4">
          Parts Features
        </h1>
        <div className=" grid grid-cols-1 sm:mx-3 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {parts.map((part) => (
            <PartsCard part={part}></PartsCard>
          ))}
        </div>
      </div>
    );
};

export default ToolsFeatures;