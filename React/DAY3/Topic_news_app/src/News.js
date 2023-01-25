import React, { useEffect, useState } from "react";
import NewsCard from './NewsCard';
export default function News() {
  const apiUrl =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=3be751f1162f420c8ac627d6a72a10a6";

  let [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((actualData) => setArticles(actualData.articles))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container mx-auto flex justify-between flex-wrap">
      {articles.map((article)=>{
        return(
            <NewsCard key={article.publishedAt} article = {article}></NewsCard>
        )
      })}
    </div>
  );
}
