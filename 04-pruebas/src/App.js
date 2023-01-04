import "./App.css";
//import FirstApp from "./componets/FirstApp";
import CounterApp from "./componets/CounterApp";
function App() {
  return (
    <div className="App">
      <CounterApp value={10} />
    </div>
  );
}

export default App;
