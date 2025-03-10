import React from 'react';

const HealthRecords = () => {
  const healthRecords = [
    { id: 1, cowId: 1, date: '2023-10-01', condition: 'Healthy', treatment: 'None' },
    { id: 2, cowId: 2, date: '2023-10-02', condition: 'Fever', treatment: 'Antibiotics' }
  ];

  return (
    <div className="health-records">
      <h2>Health Records</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Cow ID</th>
            <th>Condition</th>
            <th>Treatment</th>
          </tr>
        </thead>
        <tbody>
          {healthRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.cowId}</td>
              <td>{record.condition}</td>
              <td>{record.treatment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthRecords;
