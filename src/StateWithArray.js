import React, { useState } from "react";
function StateWithArray() {
  const [items, setItems] = useState([]);
  const handleClick = (e) => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10 + 1) }
    ]);
  };
  return (
    <div>
      <button onClick={handleClick}>Add a Number</button>
      <div>
        {items.map((item) => {
          return <p key={item.id}>{item.value}</p>;
        })}
      </div>
    </div>
  );
}
export default StateWithArray;
