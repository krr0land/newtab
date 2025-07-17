import React, { useState } from "react";

export default function Searchbar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <form onSubmit={handleSearch} className="md:pt-20 text-center flex flex-row items-center gap-4 w-full max-w-4xl group">
      <img src="g_logo.png" alt="Google Logo" className="w-[48px] grayscale-[0.75] duration-1000 ease-in-out group-focus-within:grayscale-0" />
      <input
        type="text"
        placeholder="Search Google..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow py-[10px] px-[16px] border-0 rounded-none box-border border-b-2 border-b-neutral-500 outline-none h-12 bg-transparent text-xl placeholder-neutral-500 duration-1000 ease-in-out group-focus-within:border-b-neutral-300"
      />
    </form>
  );
}
