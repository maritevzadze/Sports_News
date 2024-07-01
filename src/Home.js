import React from 'react';
import useFetch from '../hooks/useFetch'; // Custom hook for fetching data

function Home() {
  const { data, loading, error } = useFetch();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <div className="home">
      <h2>Top News</h2>
      <div className="news-list">
        {data.map((article) => (
          <div key={article.id} className="news-item">
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
