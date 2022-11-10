import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [ordered1, setOrdered1] = useState(0);
  const [ordered2, setOrdered2] = useState(0);
  const [ordered3, setOrdered3] = useState(0);
  const [ordered4, setOrdered4] = useState(0);
  const [ordered5, setOrdered5] = useState(0);
  const [ordered6, setOrdered6] = useState(0);
  const [ordered7, setOrdered7] = useState(0);
  const [ordered8, setOrdered8] = useState(0);
  const [ordered9, setOrdered9] = useState(0);
  const [ordered10, setOrdered10] = useState(0);
  const [ordered11, setOrdered11] = useState(0);
  const [ordered12, setOrdered12] = useState(0);
  const [ordered13, setOrdered13] = useState(0);
  const [ordered14, setOrdered14] = useState(0);
  const setArray = [setOrdered1,setOrdered2,setOrdered3,setOrdered4,setOrdered5,setOrdered6,setOrdered7,setOrdered8,setOrdered9,setOrdered10,setOrdered11,setOrdered12,setOrdered13,setOrdered14]
  const getArray = [ordered1,ordered2,ordered3,ordered4,ordered5,ordered6,ordered7,ordered8,ordered9,ordered10,ordered11,ordered12,ordered13,ordered14]
  let current = 0
  let myFunction = function () {
    return setOrdered1(ordered1 + 1);
  };
  return (
    <div className="App">
      <h1>Will & Jack's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="itemsAndCart">
        <div className="items">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <div className="item" id={index}>
              <p>{item.name}</p>
              <img src={item.image}/>
              <button type="button" onClick={myFunction}>Add to Cart!</button>
            </div>
        ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          {ordered1}
        </div>
      </div>
    </div>
  );
}

export default App;
