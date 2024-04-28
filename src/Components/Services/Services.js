// Service.js
import React from 'react';
import { ServiceData } from './ServiceData'; 
import ServiceItem from './ServiceItems';

const Service = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue mb-2">Our Services </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServiceData.map((item, index) => (
            <ServiceItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
