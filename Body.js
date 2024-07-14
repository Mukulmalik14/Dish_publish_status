import DishesCart from "./DishesCart";
import { data } from "./Data";
const Body = () => {
  return (
    <div className="body-container">
      <h2>Dishes Status</h2>
      <div className="dishes-cart">
        {data.map((dish) => (
          <DishesCart
            key={dish.dishId}
            name={dish.dishName}
            published={dish.isPublished}
            imageURL={dish.imageUrl}
          ></DishesCart>
        ))}
      </div>
    </div>
  );
};

export default Body;
