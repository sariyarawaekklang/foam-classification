import React from 'react';
import photos from '../data/foam-seed.json';

export default function Card() {
  const cardStyle = {
    width: '18rem',
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={photos.url}
          alt="foam"
        />
        <div className="card-body">
          <p href="#" className="btn btn-primary">
            NO FOAMING
          </p>
          <p href="#" className="btn btn-primary">
            SOME FOAMING
          </p>
        </div>
      </div>
    </div>
  );
}
