import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AboutUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.100.57:3000/api/page/getPage?title=AboutUs')
      .then((response) => response.json())
      .then((result) => {
        // Map the response data to match your component's structure
        const mappedData = result.map((item) => ({
          image: item.url,
          description: item.title,
        }));
        setData(mappedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="about-us-container">
        <h1>About Us</h1>

        <div className="content">
          {data.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.image} alt={`Image ${index + 1}`} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  
  );
};

export default AboutUs;
