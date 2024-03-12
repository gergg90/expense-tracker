import useGlobalState from "../hooks/useGlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <>
      <h3 className="text-white text-xl font-bold my-2 text-center">History</h3>
      <ul>
        {transactions.map((transaction) => {
          return (
            <TransactionItem transaction={transaction} key={transaction.id} />
          );
        })}
      </ul>
    </>
  );
}

export default TransactionList;
