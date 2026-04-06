import React from 'react';
import spidy from '../assets/spider.mp4'
import avng from "../assets/Avengers.mp4"
import f1 from '../assets/f1.mp4'


export default function Promo() {
    return (
        <div className="promo-wrapper">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        <div className="video-container">
                            <video autoPlay muted loop playsInline className="promo-video">
                                <source src={avng} type="video/mp4" />
                            </video>
                        </div>
                        <div className="promo-overlay"></div>
                        <div className="card-img-overlay d-flex flex-column justify-content-center px-5">
                            <div className="promo-text-content text-white">
                                <h2 className="display-4 fw-bold">Captain America :Civil war</h2>
                                <p className="mb-1">New Episode Sat</p>
                                <p className="small text-secondary">2026 • U/A 16+ • Tamil</p>
                                <p className="text-white-50 w-50 d-none d-md-block">
                                    Marvel Studios action-adventure film where political pressure to regulate the Avengers causes a deep ideological rift between Captain America (Steve Rogers) and Iron Man (Tony Stark). 
                                </p>
                                <button className="btn-subscribe mt-3" type="button">
                                    <i className="bi bi-play-fill me-2"></i>Subscribe to watch
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <div className="video-container">
                            <video autoPlay muted loop playsInline className="promo-video">
                                <source src={f1} type="video/mp4" />
                            </video>
                        </div>
                        <div className="promo-overlay"></div>
                        <div className="card-img-overlay d-flex flex-column justify-content-center px-5">
                            <div className="promo-text-content text-white">
                                <h2 className="display-4 fw-bold">F1 : The Movie</h2>
                                <p className="mb-1">New Episode Sat</p>
                                <p className="small text-secondary">2026 • U/A 16+ • Tamil</p>
                                <p className="text-white-50 w-50 d-none d-md-block">
                                   F1 (2025) is a sports action-drama starring Brad Pitt as Sonny Hayes, a retired Formula 1 driver who returns to the sport to mentor a young rookie (Damson Idris) at a struggling underdog team.
                                </p>
                                <button className="btn-subscribe mt-3" type="button">
                                    <i className="bi bi-play-fill me-2"></i>Subscribe to watch
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* {slide 3} */}

                    
                    

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    );
}