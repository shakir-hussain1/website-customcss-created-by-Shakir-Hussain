import React from 'react';
const Home = () => {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: "url('bg.avif')" }}>
        <div>
          <h1 className="fade-in">Welcome to Techmaa Laptop Store</h1>
          <p>Your one-stop shop for the best Laptops</p>
          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;