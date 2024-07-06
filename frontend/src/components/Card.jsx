import React from 'react';
import './css/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const { attributes } = item || {};
  const { img, name, title, price, desc } = attributes || {};

  // Check if img and its nested properties are available
  const imageUrl = `http://localhost:1337${img.data.attributes.url}`;

  return (
    <div className="main-product">
      <div className="img">
        <img className="img1" src={imageUrl} alt={name} />
        <div className="flex">
          <div className='buttons'>
            <div className="font">{title}</div>
            <div className="font">₹ {price}</div>
          </div>
          <div className="font1">{desc}</div>
          <div className="buttons1">
            <Link to={`/product/${item.id}`}>
              <button className="button-13">Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
