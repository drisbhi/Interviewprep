import { useState } from "react";
function HookPrev() {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);
  const handleFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      count : {count} <br />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(intialCount)}>Reset</button>
      <button onClick={handleFive}>Increment by 5</button>
    </div>
  );
}
export default HookPrev;
