// import React from 'react'
// import { useState, useEffect } from 'react';

// const SScreen = () => {
//   const [currentDate, setCurrentDate] = useState('');
//   const [currentTime, setCurrentTime] = useState('');

//   useEffect(() => {
//     const today = new Date();
//     const dd = String(today.getDate()).padStart(2, '0');
//     const mm = String(today.getMonth() + 1).padStart(2, '0'); 
//     const yyyy = today.getFullYear();

//     const formattedDate = `${dd}/${mm}/${yyyy}`;
//     setCurrentDate(formattedDate);

//     const updateCurrentTime = () => {
//       const now = new Date();
//       const hours = String(now.getHours()).padStart(2, '0');
//       const minutes = String(now.getMinutes()).padStart(2, '0');
//       const seconds = String(now.getSeconds()).padStart(2, '0');
//       const formattedTime = `${hours}:${minutes}:${seconds}`;
//       setCurrentTime(formattedTime);
//     };
//     updateCurrentTime();
//     const intervalId = setInterval(updateCurrentTime, 1000); // Update time every second

//     return () => clearInterval(intervalId);
//   }, []);
//   return (
//     <div>
//       <div class="container">
//         <h1 class="center-text">Transmission Organisation</h1>
//         <h1 class="center-text">New Message Selection by 7 digit Supplier</h1>
//         <p><strong>Date&time:</strong> <span>{currentDate} & {currentTime}</span></p>
        
//         <p><strong>Application:</strong> LM - LOGISTICS MANAGEMENT</p>
//         <p><strong>Supplier:</strong> 6879601 IMPERIAL TOBACCO LIMITED NI</p>

//         <table>
//             <thead>
//                 <tr>
//                     <th>S/R</th>
//                     <th>Message</th>
//                     <th>Type</th>
//                     <th>Std</th>
//                     <th>Ver</th>
//                     <th>TVer</th>
//                     <th>Description</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>R</td>
//                     <td>DELHDR</td>
//                     <td>0600</td>
//                     <td>T</td>
//                     <td>09</td>
//                     <td>01</td>
//                     <td>Live delivery note</td>
//                 </tr>
//                 <tr>
//                     <td>R</td>
//                     <td>DELTES</td>
//                     <td>0600</td>
//                     <td>T</td>
//                     <td>09</td>
//                     <td>01</td>
//                     <td>Test delivery note</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDERS</td>
//                     <td>105</td>
//                     <td>E</td>
//                     <td>05</td>
//                     <td>00</td>
//                     <td>Live final purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDERS</td>
//                     <td>105</td>
//                     <td>E</td>
//                     <td>OS</td>
//                     <td>00</td>
//                     <td>Test final purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDERS</td>
//                     <td>105</td>
//                     <td>E</td>
//                     <td>06</td>
//                     <td>00</td>
//                     <td>Live final purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDERS</td>
//                     <td>105</td>
//                     <td>E</td>
//                     <td>06</td>
//                     <td>00</td>
//                     <td>Test final purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDHDR</td>
//                     <td>0350</td>
//                     <td>T</td>
//                     <td>08</td>
//                     <td>00</td>
//                     <td>Live proposed purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDHDR</td>
//                     <td>0350</td>
//                     <td>T</td>
//                     <td>09</td>
//                     <td>00</td>
//                     <td>Live proposed purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDHDR</td>
//                     <td>0430</td>
//                     <td>T</td>
//                     <td>OS</td>
//                     <td>00</td>
//                     <td>Live final purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDHDR</td>
//                     <td>0430</td>
//                     <td>T</td>
//                     <td>09</td>
//                     <td>00</td>
//                     <td>Live final purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDHDR</td>
//                     <td>0450</td>
//                     <td>T</td>
//                     <td>08</td>
//                     <td>00</td>
//                     <td>Live copy purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDHDR</td>
//                     <td>0450</td>
//                     <td>T</td>
//                     <td>09</td>
//                     <td>00</td>
//                     <td>Live copy purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDHDR</td>
//                     <td>0490</td>
//                     <td>T</td>
//                     <td>08</td>
//                     <td>00</td>
//                     <td>Live production purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDHDR</td>
//                     <td>0490</td>
//                     <td>T</td>
//                     <td>09</td>
//                     <td>00</td>
//                     <td>Live production purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDTES</td>
//                     <td>0350</td>
//                     <td>T</td>
//                     <td>08</td>
//                     <td>00</td>
//                     <td>Test proposed purchase order</td>
//                 </tr>
//                 <tr>
//                     <td>S</td>
//                     <td>ORDTES</td>
//                     <td>0350</td>
//                     <td>T</td>
//                     <td>09</td>
//                     <td>00</td>
//                     <td>Test proposed purchase order</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
//     </div>
//   )
// }

// export default SScreen

import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';

const SScreen = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [supplierNumber, setSupplierNumber] = useState('6879601');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();

    const formattedDate = `${dd}/${mm}/${yyyy}`;
    setCurrentDate(formattedDate);

    const updateCurrentTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setCurrentTime(formattedTime);
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000); // Update time every second

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Replace with your API endpoint, including supplier number as a query parameter or part of the URL
    const apiEndpoint = `https://api.example.com/data?supplier=${supplierNumber}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };

    fetchData();
  }, [supplierNumber]); // Re-fetch data whenever supplierNumber changes

  const handleSupplierChange = (event) => {
    setSupplierNumber(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <h1 className="center-text">Transmission Organisation</h1>
        <h1 className="center-text">New Message Selection by 7 digit Supplier</h1>
        <p><strong>Date & Time:</strong> <span>{currentDate} & {currentTime}</span></p>
        
        <p><strong>Application:</strong> LM - LOGISTICS MANAGEMENT</p>
        <p>
          <strong>Supplier:</strong> 
          <input 
            type="text" 
            value={supplierNumber} 
            onChange={handleSupplierChange} 
          />
        </p>

        <table>
          <thead>
            <tr>
              <th>S/R</th>
              <th>Message</th>
              <th>Type</th>
              <th>Std</th>
              <th>Ver</th>
              <th>TVer</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <TableRow key={index} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SScreen;

