import React from "react";
import { addToDb, removeCartItem } from "../../utilities/fakebd";
import "./User.css";

const User = (props) => {
  const { id, price, name } = props.data;
  const addToCart = (id) => {
    addToDb(id);
  };
  const removeCart = (id) => {
    removeCartItem(id);
  };

  return (
    <div className="user">
      <h1>User: {name}</h1>
      <h3>Price: {price}</h3>
      <h4>Id: {id}</h4>
      <button onClick={() => addToCart(id)}>Add to cart</button>
      <button onClick={() => removeCart(id)}>remove cart</button>
    </div>
  );
};

export default User;
