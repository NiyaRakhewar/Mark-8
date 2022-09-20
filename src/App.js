import React, { useState } from "react";
import "./styles.css";

const fruitDictionary = {
  "🍋": "Lemon",
  "🍒": "Cherry",
  "🥑": "Avocado",
  "🍇": "Grapes",
  "🍑": "Peach",
  "🥝": "Kiwi",
  "🍓": "Strawberry",
  "🥭": "Mango",
  "🍈": "Melon",
  "🍍": "Pineapple",
  "🍐": "Pear"
};

const fruits = Object.keys(fruitDictionary);

export default function App() {
  const [fruit, setFruit] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputFruit = event.target.value;
    setFruit(inputFruit);

    if (inputFruit in fruitDictionary) {
      setMeaning(fruitDictionary[inputFruit]);
    } else {
      setMeaning("Fruit not found!!");
    }
  }

  function fruitClickHandler(inputFruit) {
    setMeaning(fruitDictionary[inputFruit]);
  }

  return (
    <div className="App">
      <h1> Fruits </h1>
      <h2>inside outttt </h2>
      <input
        onChange={changeHandler}
        value={fruit}
        placeholder={"Search Your Fruit "}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {fruit} </h2>
      <h3> {meaning} </h3>
      {fruits.map((fruit) => (
        <span
          onClick={() => fruitClickHandler(fruit)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {fruit}{" "}
        </span>
      ))}
    </div>
  );
}
