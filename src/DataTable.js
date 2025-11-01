import React from "react";

function DataTable({ data }) {
  console.log("Отримані дані для таблиці:", data); // Лог для перевірки
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Місто</th>
          <th>PM2.5</th>
          <th>Station ID</th>
          <th>Виміряно</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.city}</td>
              <td>{item.pm25}</td>
              <td>{item.stationId}</td>
              <td>{item.measuredAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">Немає даних для відображення</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default DataTable;
