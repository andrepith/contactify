import { Provider } from "react-redux";
import { store } from "./store";
import Contactify from "./containers/Contactify";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Contactify />
      </Provider>
    </div>
  );
}

export default App;
