import React from 'react';
import { Popcorn, Footprints } from 'lucide-react';
import jio from '../assets/jiohotstar.png';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <nav className="sidebar-container d-flex flex-column py-4">

      {/* 1. Logo Section - Uses same centering as icons */}
      <div className="sidebar-logo-section mb-5">
        <img src={jio} alt="jio" className="sidebar-logo-img" />
      </div>

      {/* 2. Navigation Items */}
      <div className="d-flex flex-column gap-3 my-auto w-100">
        <Link to="/" style={{textDecoration:"none"}}>
          <SidebarIcon icon={<i className="bi bi-house-door-fill" ></i>} label="Home" active />
        </Link>


        <Link to="/search" style={{ textDecoration: 'none' }}>
          <SidebarIcon icon={<i className="bi bi-search"></i>} label="Search" />
        </Link>
        <SidebarIcon icon={<i className="bi bi-tv"></i>} label="TV" />
        <SidebarIcon icon={<Popcorn size={24} strokeWidth={1.5} />} label="Movies" />
        <SidebarIcon icon={<Footprints size={24} strokeWidth={1.5} />} label="Sports" />
        <SidebarIcon icon={<i className="bi bi-camera-reels"></i>} label="Sparks" />
        <SidebarIcon icon={<i className="bi bi-grid-1x2"></i>} label="Categories" />
      </div>

      {/* 3. Profile Section - Also perfectly centered */}
      <div className="mt-auto">
        <SidebarIcon icon={<i className="bi bi-person-circle"></i>} label="My Space" />
      </div>
    </nav>
  );
}

function SidebarIcon({ icon, label, active }) {
  return (
    <div className={`sidebar-item ${active ? 'active-item' : ''}`}>
      <div className="sidebar-icon-wrapper">
        {icon}
      </div>
      <span className="sidebar-text">{label}</span>
    </div>
  );
}