import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from "react-flip-move";

function Results({ selectedCategory }) {
  // movies state
  const [movies, setMovies] = useState([]);

  //useEffect hook -
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(selectedCategory);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="results">
      {/* mapping over all movie objects in movies */}
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
