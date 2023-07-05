import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocationsForm from './components/locationsForm/LocationsForm';

function App() {
  const cityOptions = [
    { label: 'Brighton, UK', value: 'brighton' },
    { label: 'Lisbon, Portugal', value: 'lisbon' },
    { label: 'Valencia, Spain', value: 'valencia' },
    { label: 'Riga, Latvia', value: 'riga' },
    { label: 'Santorini, Greece', value: 'santorini' }
  ];

  const [count, setCount] = useState(0)

  const appTitle = "WeatherWhisper App";

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{appTitle}</h1>
      <LocationsForm />
      <div className="card">
        <LocationsForm cityOptions={cityOptions} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App