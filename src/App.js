import "./App.css";
import { useState, useEffect } from "react";
import { Article } from "./components/Article";

function App() {
  const [subreddit, setSubreddit] = useState("jokes");
  const [redditData, setredditData] = useState([]);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`).then((res) => {
      if (res.status !== 200) {
        console.log("error");
        return;
      }
      res.json().then((data) => {
        if (data != null) {
          console.log(data);
          setredditData(data.data.children);
        }
      });
    });
  }, [subreddit]);

  return (
    <div>
      <header>
        <input
          type="text"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        />
      </header>
      {redditData.map((article, index) => (
        <Article
          key={index}
          title={article.data.title}
          permalink={article.data.permalink}
          content={article.data.selftext}
          ups={article.data.ups}
        />
      ))}
    </div>
  );
}

export default App;
