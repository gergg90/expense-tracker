import useGlobalState from "../hooks/useGlobalState";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-teal-800 text-white py-1 px-3 mx-3 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-lg">{transaction.description}</p>
      <div>
        <span>${transaction.amount}</span>
        <button onClick={() => deleteTransaction(transaction.id)}>❌</button>
      </div>
    </li>
  );
}

export default TransactionItem;
