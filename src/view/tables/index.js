import React from "react";

import "./table.css";

const Table = ({ data }) => {
  console.log(data, "data");
  return (
    <div className="tables">
      <table>
        <tbody>
          <tr>
            <th>2000</th>
            <th>2001</th>
            <th>2002</th>
          </tr>
          {data &&
            data.map((items, index) => (
              <tr key={index}>
                <td>{items[2000]}</td>
                <td>{items[2001]}</td>
                <td>{items[2002]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
