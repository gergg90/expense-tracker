import useGlobalState from "../hooks/useGlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const total = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => {
      return (acc += item);
    }, 0);

  return (
    <div className="flex justify-between items-center">
      <h3>Your Balance:</h3>
      <h1 className="text-2xl font-bold">${total}</h1>
    </div>
  );
}

export default Balance;
