// TableRow.js
import React from 'react';

const TableRow = ({ row }) => {
  return (
    <tr>
      <td>{row.sr}</td>
      <td>{row.message}</td>
      <td>{row.type}</td>
      <td>{row.std}</td>
      <td>{row.ver}</td>
      <td>{row.tver}</td>
      <td>{row.description}</td>
    </tr>
  );
};

export default TableRow;
