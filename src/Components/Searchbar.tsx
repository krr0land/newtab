import React, { useState } from "react";

export default function Searchbar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  // noinspection HtmlUnknownTarget
  return (
    <form onSubmit={handleSearch} className="md:mt-20 text-center flex flex-row items-center gap-2 w-full max-w-3xl group bg-gray-700 dark:bg-white rounded-full">
      <img src="g_logo_tr.png" alt="Google Logo" className="w-[48px]" /> {/*grayscale-[0.75] duration-1000 ease-in-out group-focus-within:grayscale-0*/}
      <input
        type="text"
        placeholder="Search Google..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow outline-none h-12 text-xl text-white dark:text-zinc-700 placeholder-neutral-300 dark:placeholder-neutral-500"
      />
    </form>
  );
}
