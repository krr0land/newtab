import {useState} from "react";

export default function Searchbar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <img src="img/g_logo.png" alt="Google Logo" className="search-logo" />
      <input
        type="text"
        placeholder="Search Google..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
    </form>
  );
}