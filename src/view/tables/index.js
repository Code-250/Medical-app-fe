import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="tables">
      <table>
        <tr>
          <th>2000</th>
          <th>2001</th>
          <th>2002</th>
        </tr>
        <tr>
          <td>Maralia</td>
          <td>Lyphibia</td>
          <td>Fever</td>
        </tr>
        <tr>
          <td>Typhoid</td>
          <td>Neurophobia</td>
          <td>Diareheaa</td>
        </tr>
        <tr>
          <td>HIV</td>
          <td>Tactophobia</td>
          <td>Maralia</td>
        </tr>
        <tr>
          <td>Cancer</td>
          <td>Lusophobia</td>
          <td>Marasme</td>
        </tr>
      </table>
    </div>
  );
};
export default Table;
