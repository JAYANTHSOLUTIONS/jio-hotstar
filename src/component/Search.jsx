import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';


export default function Search() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    // Replace with your actual endpoint
    axios.get("https://fooapi.com/api/movies")
      .then((res) => {
        // Handle different API structures (data.data or just data)
        const data = res.data.data 
        setMovies(data);
        setFilteredMovies(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("API Error:", e);
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setQuery(term);

    if (term.trim() === "") {
      setFilteredMovies(movies);

      console.log("trimmed",movies);
      
    } else {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredMovies(filtered);
    }

    console.log(filteredMovies);
    
  };

  return (
    <div className="search-page-container">

        <Sidebar/>
      {/* Search Input Bar */}
      <div className="search-box-wrapper">
        <i className="bi bi-search search-input-icon"></i>
        <input
          type="text"
          className="custom-search-input"
          placeholder="Movies, shows and more"
          value={query}
          onChange={handleSearch}
        />
      </div>

      {/* Grid Content */}
      <div className="search-content">
        <h5 className="section-heading">
          {query ? `Showing results for "${query}"` : "Trending in India"}
        </h5>

        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="movie-poster-grid">
            {filteredMovies.map((movie) => (
              <div className="poster-card" key={movie.id}>
                <div className="image-container">
                  <img src={movie.poster} alt={movie.title} />
                  {/* Optional: Add "Newly Added" badge if data exists */}
                  {movie.isNew && <div className="new-badge">NEWLY ADDED</div>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}