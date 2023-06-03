import { Provider } from "react-redux";
import RootRouter from "./config/router/index";
import store from "./config/redux/store";

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
}

export default App;
