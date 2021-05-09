import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  return (
    <div className="App">
      <form onClick={handleSumbit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleText}
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="pasword"
          value={data.password}
          onChange={handleText}
          placeholder="email"
        />
        <button type="sumbit">Sumbit</button>
      </form>
    </div>
  );
}
