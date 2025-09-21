import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element

// const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');

// React Element
// JSX - HTML or XML like syntax

/**
 * Header
 * - Logo
 * - Navbar
 *  - nav items
 * Body
 * - Search
 * - Restaurant cards container
 *  - Restaurant card
 *    - Img
 *    - Name of Res
 *    - Rating
 *    - Cuisine
 *    - Delivery time
 * Footer
 * - Copyright
 * - links
 * - Address
 * - Contact details
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: '#f0f0f0',
};

const RestaurantCard = (props) => {
  return (
    <div className="restro-card" style={styleCard}>
      <img
        className="res-1-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"
        alt="res-1-logo"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="American, Italian, Fast Food" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
