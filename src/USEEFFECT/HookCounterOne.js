import { useEffect, useState } from "react";
function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating ");
    document.title = `you cliked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={(e) => setCount(count + 1)}> count : {count}</button>
    </div>
  );
}
export default HookCounterOne;
