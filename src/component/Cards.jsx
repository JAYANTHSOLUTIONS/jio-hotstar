import React, { useRef } from 'react';

export default function Cards({ api, title }) {
  // 1. Create a reference to the scrollable div
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Calculate how much to move (e.g., one full view of movies)
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="movie-section mb-4 position-relative px-2">
      <h5 className="fw-bold mb-3 text-white">{title}</h5>
      
      <div className="row-wrapper position-relative">
        {/* Left Button */}
        <button className="scroll-btn left-btn" onClick={() => scroll('left')}>
          <i className="bi bi-chevron-left"></i>
        </button>

        {/* The Movie Row */}
        <div className="movie-row d-flex gap-3 overflow-hidden" ref={scrollRef}>
          {api && api.map((movie) => (
            <div key={movie.id} className="movie-card-container flex-shrink-0">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="movie-poster rounded-3"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button className="scroll-btn right-btn" onClick={() => scroll('right')}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      
    </div>
  );
}