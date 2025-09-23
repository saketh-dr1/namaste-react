import { IMG_CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { restaurantList } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    deliveryTime,
    costForTwo,
    avgRating,
  } = restaurantList?.data;

  return (
    <div className="restro-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img className="res-1-logo" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Rs{costForTwo / 100} FOR TWO </h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
