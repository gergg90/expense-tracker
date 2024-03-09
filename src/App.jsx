import "./App.css";
//! provider
import { GlobalStateProvider } from "./context/GlobalState.jsx";
//! components
import Balance from "./context/Balance.jsx";
import Header from "./context/Header.jsx";

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <Balance/>
      <span>Hello World</span>
    </GlobalStateProvider>
  );
}

export default App;
