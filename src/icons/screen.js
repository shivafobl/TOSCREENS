import React, { useEffect, useState } from 'react';

const DataForm = () => {
  const [data, setData] = useState({
    messageType: '',
    supplierNumber: '',
    supplierName: '',
    transactionCode: '',
    ediFormatType: '',
    ediVersion: '',
    tescoVersion: '',
    liveTestIndicator: '',
  });

  useEffect(() => {
    // Fetch data from the database
    // Replace the URL with your actual data fetching URL
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched data
        setData({
          ...data,
          messageType: data.messageType,
          supplierNumber: data.supplierNumber,
          supplierName: data.supplierName,
          transactionCode: data.transactionCode,
          ediFormatType: data.ediFormatType,
          ediVersion: data.ediVersion,
          tescoVersion: data.tescoVersion,
          liveTestIndicator: data.liveTestIndicator,
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <form>
      <div>
        <label>Message Type:</label>
        <input type="text" value={data.messageType} readOnly />
      </div>
      <div>
        <label>Supplier Number (5 digit):</label>
        <input type="text" value={data.supplierNumber} readOnly />
      </div>
      <div>
        <label>Supplier Name:</label>
        <input type="text" value={data.supplierName} readOnly />
      </div>
      <div>
        <label>Transaction Code:</label>
        <input type="text" value={data.transactionCode} readOnly />
      </div>
      <div>
        <label>EDI Format Type:</label>
        <input type="text" value={data.ediFormatType} readOnly />
      </div>
      <div>
        <label>EDI Version:</label>
        <input type="text" value={data.ediVersion} readOnly />
      </div>
      <div>
        <label>Tesco Version:</label>
        <input type="text" value={data.tescoVersion} readOnly />
      </div>
      <div>
        <label>Live/Test Indicator:</label>
        <input type="text" value={data.liveTestIndicator} readOnly />
      </div>
    </form>
  );
};

export default DataForm;
