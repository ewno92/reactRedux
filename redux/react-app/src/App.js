import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, signin } from "./actions";
import { actionCreators } from "./actions/actionCreators";

import { bindActionCreators } from "redux";
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const { increment } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <p>Counter {counter}</p>
      <span>login {isLogged ? "yes" : "no"}</span>

      {/* <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(signin())}>sign in</button> */}
      <button onClick={() => increment(5)}>+</button>
      {/* <button onClick={() => dispatch(signin())}>sign in</button> */}
    </div>
  );
}

export default App;
