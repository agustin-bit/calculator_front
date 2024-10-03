import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState("inch_to_cm");
  const [numberInput, setNumberInput] = useState(1);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setResponse("Calculando...");

      const res = await fetch(
        `https://calculator-api-ygtg.onrender.com/${selectedOption}/${numberInput}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();
      setResponse(data.result);

    } catch (error) {
      setResponse("ERROR");
    }
  };

  return (
    <div className="app">
      <h1>Conversor de unidades full-stack</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select an option:
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="inch_to_cm">
              Pulgadas a centímetros
            </option>
            <option value="cm_to_inch">
              Centímetros a pulgadas
            </option>
            <option value="fahrenheit_to_celsius">
              Fahrenheit a centígrados
            </option>
            <option value="celsius_to_fahrenheit">
              Centígrados a fahrenheit
            </option>
            <option value="pounds_to_kgs">
              Libras a kilos
            </option>
            <option value="kgs_to_pounds">
              Kilos a libras
            </option>
          </select>
        </label>
        <br />
        <label>
          Valor original:
          <input
            type="number"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Convertir</button>
      </form>

      <h2>Resultado: {response}</h2>

    </div>
  );
}

export default App;
