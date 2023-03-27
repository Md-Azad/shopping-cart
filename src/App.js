import "./App.css";
import LoadData from "./components/LoadData/LoadData";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LoadData></LoadData>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Welcome to the Shop.</h1>
    </div>
  );
}

export default App;
