import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Component/header/Header";
import Todolist from "./Component/todolist/Todolist";
import Footer from "./Component/footer/Footer";
import { cartActions } from "./features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const { addToCart, removeFromCart } = cartActions;

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="container">
      <div className="available-items">
        <h2>Available Items</h2>
        <ul>
          <li>
            Item 1 -{" "}
            <button
              className="button"
              onClick={() => handleAddToCart({ id: 1, name: "Item 1" })}
            >
              Add to Cart
            </button>
          </li>
          <li>
            Item 2 -{" "}
            <button
              className="button"
              onClick={() => handleAddToCart({ id: 2, name: "Item 2" })}
            >
              Add to Cart
            </button>
          </li>
          {/* Add more items as needed */}
        </ul>
      </div>
      <div className="shopping-cart">
        <h1>Shopping Cart</h1>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name}
              <button
                className="button"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
