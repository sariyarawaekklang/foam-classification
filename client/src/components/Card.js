import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  // helper function that generates a random width for our placeholder images
  // this will be deleted
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          // need to change this
          src={`http://placecorgi.com/${randomWidth()}`}
          alt="Card cap"
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
