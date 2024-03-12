import "./App.css";
//! provider
import { GlobalStateProvider } from "./context/GlobalState.jsx";
//! components
import Balance from "./components/Balance.jsx";
import Header from "./components/Header.jsx";
import TransactionsForm from "./components/TransactionsForm.jsx";
import TransactionList from "./components/TransactionList.jsx";
import IncomeExpenses from "./components/IncomeExpenses.jsx";

function App() {
  return (
    <GlobalStateProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-2/6">
          <div className="bg-zinc-600 p-10 rounded-lg flex">
            <div>
              <Header />
              <Balance />
              <IncomeExpenses />
              <TransactionsForm />
            </div>
            <div className="w-full">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
