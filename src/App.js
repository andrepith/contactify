import { Provider } from "react-redux";
import { store } from "./store";
import Contactify from "./containers/Contactify";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Contactify />
      </Provider>
    </div>
  );
}

export default App;
