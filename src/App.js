import "./App.css";
import MainComponent from "./components/MainComponent";
import { Provider } from "react-redux";
import { store } from "../src/app/store";

function App() {
  return (
    <>
     {/* Providing the Redux store to the entire application using the Provider */}
      <Provider store={store}>
        <MainComponent />
      </Provider>
    </>
  );
}

export default App;
