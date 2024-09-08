import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/${selectedOption}/${numberInput}`, {
        method: 'GET'
      });

      const data = await res.json();
      setResponse(data.message || 'Success!');


      alert(data.result);

    } catch (error) {
      setResponse('An error occurred.');
    }
  };

  return (
    <div className="App">
      <h1>Conversor de unidades fullstack</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select an option:
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="inch_to_cm">Pulgadas a centímetros</option>
            <option value="cm_to_inch">Centímetros a pulgadas</option>
            <option value="fahrenheit_to_celsius">Fahrenheit a centígrados</option>
            <option value="celsius_to_fahrenheit">Centígrados a fahrenheit</option>
            <option value="pounds_to_kgs">Libras a kilos</option>
            <option value="kgs_to_pounds">Kilos a libras</option>
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
    </div>
  );
}

export default App;
