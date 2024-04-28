// ServiceItem.js
import React from 'react';

const ServiceItem = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={item.img}
        className="w-full h-64 object-cover"
        alt={item.title}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue mb-2">{item.title}</h2>
        {/* <p className="text-gray-600">{item.desc}</p> */}
      </div>
    </div>
  );
};

export default ServiceItem;
