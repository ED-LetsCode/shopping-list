import "./App.css";
import { useState, useRef } from "react";
import Item from "./Components/Item";
import { v4 as uuid } from "uuid";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    setItems((prevItems) => [
      ...prevItems,
      { id: uuid(), name: item, checked: false },
    ]);
    setItem("");
  };

  const handleCheck = (event, itemId) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return item.id === itemId ? { ...item, checked: !item.checked } : item;
      });
    });
  };

  const handleRemove = (itemId) => {
    setItems((prevItems) => {
      return prevItems.filter((prevItem) => prevItem.id !== itemId);
    });
  };

  return (
    <div className="bg-slate-800 w-screen h-screen flex items-center justify-center flex-col">
      <h1 className=" text-5xl text-gray-200 mb-5">Shopping List</h1>
      <div className="w-4/6 h-2/3 bg-gray-200 rounded-md p-3">
        <div className="w-full h-[90%] overflow-x-auto">
          {items.map((item) => (
            <Item
              key={item.id}
              props={item}
              handleCheck={handleCheck}
              handleRemove={handleRemove}
            />
          ))}
        </div>

        <div className="w-full flex justify-between h-10 mt-3 rounded-md ">
          <input
            className="w-[90%] h-10 rounded-md text-center bg-gray-50"
            type="text"
            placeholder="Enter a Item"
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
          <button
            className="w-[9%] bg-gray-50 rounded-md bg-red-500 text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
