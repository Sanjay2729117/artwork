// Featured.jsx
import React, { useState, useEffect } from 'react';
import Card from "./Card.jsx"; // Import the Card component
import './css/Featured.css';
import axios from 'axios';

const Featured = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/products?populate=*", {
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
  }, []);

  // Log filtered data
  const filteredData = data.filter(d => d.attributes.type === type);

  return (
    <div>
      <h1 className='heading'>{type} Products</h1>
      <div className='flex123'>
        {filteredData.map(item => (
          <Card 
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Featured;