import useGlobalState from "../hooks/useGlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const income = transactions
    .map((transaction) => transaction.amount)
    .filter((income) => income > 0)
    .reduce((acc, item) => {
      return (acc += item);
    }, 0)
    .toFixed(2);

  const expenses =
    transactions
      .map((transaction) => transaction.amount)
      .filter((expense) => expense < 0)
      .reduce((acc, item) => {
        return (acc += item);
      }, 0)
      .toFixed(2) * -1;

  return (
    <>
      <div className="flex justify-between items-center">
        <h3>Income:</h3>
        <h1 className="text-2xl font-bold">${income}</h1>
      </div>

      <div className="flex justify-between items-center">
        <h3>Expenses:</h3>
        <h1 className="text-2xl font-bold">${expenses}</h1>
      </div>
    </>
  );
}

export default IncomeExpenses;
