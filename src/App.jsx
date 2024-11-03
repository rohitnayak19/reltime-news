import React, { useContext, useState } from "react";
import { NewsContext } from "./context/NewsContext";
import Card from "./components/Card";

const App = () => {
  const { articles, setQuery } = useContext(NewsContext);
  const [search, setSearch] = useState("");

  // Handler for category selection
  const handleCategoryClick = (category) => {
    setQuery(category);
  };

  // Handler for the search functionality
  const handleSearch = () => {
    if (search.trim()) setQuery(search);
  };

  return (
    <>
      <nav className="bg-gray-100 flex flex-wrap items-center justify-between py-4 px-6 sm:px-10">
        <h1
          onClick={() => setQuery("india")}
          className="text-xl cursor-pointer font-semibold bg-sky-700 text-white rounded"
        >
          News{" "}
          <span className="bg-rose-700 text-white px-2 py-0.5 rounded">
            Media
          </span>
        </h1>
        <div className="mt-2 sm:mt-0">
          <ul className="flex flex-wrap gap-4 sm:gap-10">
            {["Cricket", "Football", "Politics", "AI"].map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="text-md cursor-pointer text-zinc-700 transition duration-100 ease-in hover:text-purple-700"
                aria-label={`Category ${category}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            type="text"
            placeholder="Search"
            className="outline-none py-2 px-2 rounded-sm border border-gray-300"
            aria-label="Search"
          />
          <button
            onClick={handleSearch}
            className="bg-sky-600 text-white px-3 py-2 rounded-sm hover:bg-sky-700"
          >
            Search
          </button>
        </div>
      </nav>

      <main className="p-4">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <Card key={index} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No data found</p>
        )}
      </main>
    </>
  );
};

export default App;
