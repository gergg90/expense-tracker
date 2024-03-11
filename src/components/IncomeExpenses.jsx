import useGlobalState from "../hooks/useGlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const income = transactions
    .map((transaction) => transaction.amount)
    .filter((income) => income > 0)
    .reduce((acc, item) => {
      return (acc += item);
    }, 0);

  const expenses = transactions
    .map((transaction) => transaction.amount)
    .filter((expense) => expense < 0)
    .reduce((acc, item) => {
      return (acc += item);
    }, 0);

  return (
    <>
      <div>
        <h3>Income: ${income}</h3>
      </div>

      <div>
        <h3>Expenses: ${expenses}</h3>
      </div>
    </>
  );
}

export default IncomeExpenses;
