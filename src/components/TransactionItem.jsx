import useGlobalState from "../hooks/useGlobalState";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-teal-800 text-white py-1 px-3 mx-3 rounded-lg mb-2 w-full flex justify-between items-center">
      <p>{transaction.description}</p>
      <div>
        <span className="pr-3">${transaction.amount}</span>
        <button
          className="text-2xl hover:bg-teal-700 rounded-full p-1"
          onClick={() => deleteTransaction(transaction.id)}
        >
          ❌
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
