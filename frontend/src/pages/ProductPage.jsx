import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../components/css/ProductPage.css';
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
const ProductPage = () => {
  const { id } = useParams();
  const [item, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:1337/api/products/${id}?populate=*`, {
          headers: {
            Authorization: `Bearer 5cb74af97b22a71fbdaf240fe98763769a0e9f1dde3d97abc811eb9636eb272c50d9f9a21d18ed4a7f57ff18b302208f9c748461adcb8bcb4e5317da91d23c70dedd10f662adbcaed503c96aa56ad2b7fdca36e47f52190243429c1dfaecbf5355bbe86a4f5abdea3183d0dd5865006352a7129442e50056bbfd84cdaab9d32b`,
         
          },
        });
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  const { attributes } = item;
  const { img, title, price, desc,productId } = attributes;
  const imageUrl = `http://localhost:1337${img.data.attributes.url}`;

  return (
    <div className='product'>
      <div className='left'>
        <div className='mainImg'>
          <img src={imageUrl} alt={title} />
        </div>
      </div>
      <div className='right'>
        <h1>{title}</h1>
        <p>Price : ₹{price}</p>
        <p>Product ID : {productId}</p>
        <p>{desc}</p>
       
        <Link to="/contact" onClick={() => setOpen(false)}><button className="add" >
       Buy Now
        </button></Link> 
        <div className="links">
        
         
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
