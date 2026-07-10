import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (city.trim() === "") {
      alert("Please enter a city");
      return;
    }

    onSearch(city.trim());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;