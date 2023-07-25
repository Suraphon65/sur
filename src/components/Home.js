import React from 'react';

const CalorieTable = () => {
  const data = [
    { food: 'แกงเห็ดเผาะไข่มดแดง', calories: 400 }
    
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>อาหาร</th>
          <th>แคลอรี (กิโลแคลอรี)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.food}</td>
            <td>{item.calories}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalorieTable;
