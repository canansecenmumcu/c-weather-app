import { useEffect, useState } from 'react';
import City from "./City";
import axios from 'axios';
import './App.css';

function App() {
  const key = "9cb0601a6d0673d682fa4d1860f60259";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  const [error, setError] = useState("");
   
  
  const handleData =  async () => {
    if (search) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        setCity(response.data);
        setError("");
      } catch (error) {
        setError("Hava durumu bilgisi alınamadı.");
        setCity(null); 
      }
    }
  }
  useEffect(() => {
     handleData();
  }, [search]);

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Şehir Adı Girin"
          className="px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white 
            bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          onChange={(e) => setSearch(e.target.value)}
        />
        {error && <p>{error}</p>}
        {city && <City city={city} />} {/* Sadece city varsa render et */}
      </div>
    </div>
  );
}

export default App;