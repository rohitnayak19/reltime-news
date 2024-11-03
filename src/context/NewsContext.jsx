import React, { createContext, useEffect, useState } from "react";
export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const apiKey = "4b4cdafddadb45e489b1a92aecea5d3b";
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("india");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <NewsContext.Provider value={{ articles, setQuery }}>
      {children}
    </NewsContext.Provider>
  );
};
