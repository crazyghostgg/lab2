import React, { useEffect, useState } from "react";
import DataTable from "./DataTable"; // Компонент для таблиці
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Запит до API...");
    fetch("http://localhost:3000/api/air-quality") // Перевір, чи правильний шлях до API
      .then((response) => {
        if (!response.ok) {
          throw new Error("Не вдалося отримати дані з API");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Дані отримані:", data);
        if (data.success && data.data) {
          setData(data.data); // Записуємо отримані дані в state
        } else {
          setError("Немає даних для відображення");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Помилка при отриманні даних:", error);
        setError(error.message); // Зберігаємо помилку
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Завантаження...</div>;
  }

  return (
    <div className="app">
      <h1>Екологічні дані</h1>
      {error && <div className="error">{error}</div>}
      {data.length > 0 ? (
        <DataTable data={data} />
      ) : (
        <div>Немає даних для відображення</div>
      )}
    </div>
  );
}

export default App;
