import { useState } from "react";

const DishesCart = (props) => {
  const [publish, setpublish] = useState(props.published.toString());
  const toggleHandler = () => {
    if (publish == "true") {
      setpublish("false");
    } else {
      setpublish("true");
    }
  };

  return (
    <div className="Dish-cart-container">
      <img src={props.imageURL}></img>
      <div className="dishes-info">
        <h3>{props.name}</h3>
        <h5>Publishing Status : {publish}</h5>
        <button onClick={toggleHandler}>Toggle Status</button>
      </div>
    </div>
  );
};

export default DishesCart;
