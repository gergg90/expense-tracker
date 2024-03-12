import "./App.css";
//! provider
import { GlobalStateProvider } from "./context/GlobalState.jsx";
//! components
import Balance from "./components/Balance.jsx";
import Header from "./components/Header.jsx";
import TransactionsForm from "./components/TransactionsForm.jsx";
import TransactionList from "./components/TransactionList.jsx";
import IncomeExpenses from "./components/IncomeExpenses.jsx";
import ExpenseChart from "./components/ExpenseChart.jsx";

function App() {
  return (
    <GlobalStateProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-2">
            <div>
              <Header />
              <Balance />
              <IncomeExpenses />
              <TransactionsForm />
            </div>
            <div className="flex flex-col flex-1">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
