import "./styles.css";
//import Form from "./Form";
import HookPrev from "./HooksPrev";
import HookState from "./HookState";
import HookUseStateWithObj from "./HookUseStateWithObj";
import StateWithArray from "./StateWithArray";
import HookCounterOne from "./USEEFFECT/HookCounterOne";
export default function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <HookState />
      <HookPrev />
      <HookUseStateWithObj />
      <StateWithArray />
      <HookCounterOne />
    </div>
  );
}
