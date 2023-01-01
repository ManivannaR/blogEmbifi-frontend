import React, { useState, useEffect } from "react";
import Header from "../Layouts/Header";
import Header2 from "../Layouts/Header2";
import Card from "../Components/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Homepage = ({ setTopic, setID }) => {
  let [articles, setArticles] = useState([]);
  let [page, setPage] = useState(0);
  let [hasMore, setHasMore] = useState(true);
  let api = `http://localhost:3001/articles?page=${page}`;
  let token = localStorage.getItem("token");

  const fetchMoreArticles = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setArticles(articles.concat(data.data));
    setPage(++page);
  };

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setArticles(data.data);
      setPage(++page);
    };
    getArticles();
  }, []);
  return (
    <>
      {!token ? <Header2 /> : <Header setTopic={setTopic} />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreArticles}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
      >
        <div className="container-fluid">
          <div className="row">
            {articles.map((obj) => {
              return (
                <Card
                  key={Date.now() * Math.random()}
                  url={obj.url}
                  description={obj.description}
                  title={obj.title}
                  img={obj.imageUrl}
                  content={obj.content}
                  setID={setID}
                />
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Homepage;
