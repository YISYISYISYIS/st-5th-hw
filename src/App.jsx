import { Provider } from "react-redux";
import store from "./redux/store";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";

function App() {
  return (
    <Provider store={store}>
      <TextInput />
      <TextList />
    </Provider>
  );
}

export default App;
