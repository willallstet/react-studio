import "./App.css";
import { useState, useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [array, setArray] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  const [costStr, setCostStr] = useState("")
  const names = ["Chocolate Chip Cookies","Matcha Mille Crepe Cake","Egg Custard Bun","Steamed Taro Buns","Chocolate Fudge Brownie","Macarons","Multigrain Bread","Croissant","Toast with Butter","Tiramisu","Egg Tart","Everything Bagel","Gingerbread Man","Cheesecake","Cream Puff"]
  const costs = [7.99,4.99,2.99,5.99,3.99,4.99,4.99,2.99,1.99,3.99,2.99,2.99,2.99,3.99,2.99]
  const [total, setTotal] = useState(0)
  function listCart() {
    var tempStr = ""
    {array.map((element, index) => {
      if (element != 0) {
        tempStr = tempStr + element.toString() + "x " + names[index] + ": $" + (array[index] * costs[index]).toFixed(2) + "\n"
      }
    })}
    setCostStr(tempStr + "\nTotal: $" + total.toFixed(2) +"\n")
    console.log(costStr)
  };
  function myFunction(x) {
    let arrayCopy = array
    arrayCopy[x] = array[x] + 1
    setTotal(total + costs[x])
    setArray(arrayCopy)
    console.log(array)
  };

  useEffect(() => {
    listCart()
  }, [total]);
  return (
    <div className="App">
      <h1>Will & Jack's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="itemsAndCart">
        <div className="items">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <div className="item">
              <p>{item.name}</p>
              <img src={item.image}/>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button type="button" onClick={() => myFunction(index)}>Add to Cart!</button>
            </div>
        ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          <div className="cart">
          {costStr}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
