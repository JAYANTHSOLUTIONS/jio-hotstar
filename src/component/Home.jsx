import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Promo from './Promo';
import Cards from './Cards';


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    axios.get("https://fooapi.com/api/movies")
      .then((res) => {
        setMovies(res.data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("API Error:", e);
        setLoading(false);
      });
  };

  
  const actionMovies = movies.filter(m => m.genre?.toLowerCase().includes("action"));
  const dramaMovies = movies.filter(m => m.genre?.toLowerCase().includes("drama"));
  const topRated = movies.filter(m => parseFloat(m.imdbRating) >= 8.5);

  return (
    <div className="home-container">
      
      {/* 1. Sidebar: Fixed to the left */}
      <Sidebar />

      {/* 2. Main Scrollable Content */}
      <div className="main-content">
        
        {/* Top Hero Section */}
        <Promo />
        
        {/* Movie Rows Container */}
        <div className="content-rows">
           
           {loading ? (
             <div className="text-center py-5">
               <div className="spinner-border text-primary" role="status"></div>
               <p className="mt-2 text-secondary">Loading your entertainment...</p>
             </div>
           ) : (
             <>
                {/* Row 1: Latest */}
                <Cards api={movies} title="Latest & Trending" />
                
                {/* Row 2: Action Hits */}
                {actionMovies.length > 0 && (
                  <Cards api={actionMovies} title="Action Packed" />
                )}

                {/* Row 3: Drama */}
                {dramaMovies.length > 0 && (
                  <Cards api={dramaMovies} title="Drama Specials" />
                )}

                {/* Row 4: Critically Acclaimed */}
                {topRated.length > 0 && (
                  <Cards api={topRated} title="Top Rated on IMDb" />
                )}
             </>
           )}

           {/* Footer Spacer */}
           <div className="footer-spacer"></div>
        </div>
      </div>
    </div>
  );
}