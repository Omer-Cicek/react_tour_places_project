import React, { useState } from 'react';
import './Card.css';

const Card = ({ data }) => {
  // const [hover, setHover] = useState();

  // const handleMouseIn = () => {
  //   setHover(true);
  // };

  // const handleMouseOut = () => {
  //   setHover(false);
  // };

  return (
    <div className="containers">
      {data.map((city) => {
        return (
          <ul className="cards" key={city.id}>
            <h3>{city.title}</h3>
            <img src={city.image} alt="Avatar" className="image" />
            <li className="overlay">
              <p className="text">{city.desc}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Card;
