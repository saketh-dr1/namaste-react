import RestaurantCard from './RestaurantCard';
import restaurantList from '../utils/mockData';

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.data.id}
              restaurantList={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
