import { useState } from "react";

function HookUseStateWithObj() {
  const [name, setName] = useState({
    fname: " ",
    lname: " "
  });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.fname}
          onChange={(e) => setName({ ...name, fname: e.target.value })}
        />
        <input
          type="text"
          value={name.lname}
          onChange={(e) => setName({ ...name, lname: e.target.value })}
        />
      </form>
      <h1> your first name : {name.fname}</h1>
      <h1>your last name : {name.lname}</h1>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
}
export default HookUseStateWithObj;
