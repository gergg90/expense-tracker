import useGlobalState from "../hooks/useGlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const total = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => {
      return (acc += item);
    }, 0);

  return (
    <div>
      <h3>Your Balance: ${total}</h3>
    </div>
  );
}

export default Balance;
