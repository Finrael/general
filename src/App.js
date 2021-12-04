import { Provider } from "react-redux";
import store from './redux/store';
import MainComponent from "./components/structuralComponents/mainComponent";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <MainComponent/>
    </div>
    </Provider>
  );
}

export default App;
