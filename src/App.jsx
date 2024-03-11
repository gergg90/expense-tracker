import "./App.css";
//! provider
import { GlobalStateProvider } from "./context/GlobalState.jsx";
//! components
import Balance from "./components/Balance.jsx";
import Header from "./components/Header.jsx";
import TransactionsForm from "./components/TransactionsForm.jsx";
import TransactionList from "./components/TransactionList.jsx";

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <Balance />
      <TransactionsForm />
      <hr />
      <TransactionList/>
    </GlobalStateProvider>
  );
}

export default App;
