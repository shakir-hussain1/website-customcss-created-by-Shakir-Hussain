
import React from 'react';

const Laptops = () => {
  const laptopData = [
    { id: 1, name: 'HP', price: 10000, description: 'Best', image: '/hp.webp' },
    { id: 2, name: 'Apple', price: 12000, description: 'Best', image: '/apple.jpeg' },
    { id: 3, name: 'Dell', price: 8000, description: 'Best', image: '/dell.jpeg' },
    { id: 4, name: 'Lenovo', price: 9000, description: 'Best', image: '/lenovo.jpeg' },
    { id: 5, name: 'ASUS', price: 7000, description: 'Best', image: '/asus.jpg' },
    { id: 6, name: 'Acer', price: 6000, description: 'Best', image: '/acer.jpg' },
  ];

  return (
    <div>
      <div className="laptops">
        {laptopData.map((laptop) => (
          <div key={laptop.id} className="laptop-card">
            <img src={laptop.image} alt={laptop.name} />
            <h3>{laptop.name}</h3>
            <p>{laptop.description}</p>
            <div className="price">${laptop.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptops;
