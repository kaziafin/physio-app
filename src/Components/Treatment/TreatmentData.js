import React from 'react';

const TreatmentDatas = () => {
  // Your treatment data can be hardcoded or fetched from an API
  const treatmentData = [
    { id: 1, name: 'Treatment 1', description: 'Description 1' },
    { id: 2, name: 'Treatment 2', description: 'Description 2' },
    { id: 3, name: 'Treatment 3', description: 'Description 3' },
    { id: 3, name: 'Treatment 3', description: 'Description 3' },
    // Add more treatment items as needed
  ];

  return (
    <div>
      <ul>
        {treatmentData.map(treatment => (
          <li key={treatment.id}>
            <h3>{treatment.name}</h3>
            <p>{treatment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TreatmentDatas;
