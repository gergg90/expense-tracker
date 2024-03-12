import { VictoryPie, VictoryLabel } from "victory";
import useGlobalState from "../hooks/useGlobalState.js";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const expense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const expensesPercentage = Math.round((expense / income) * 100);
  const incomesPercentage = 100 - expensesPercentage;

  return (
    <>
      <VictoryPie
        colorScale={["#059669", "#dc2626"]}
        data={[
          { x: "Income", y: incomesPercentage },
          { x: "Expense", y: expensesPercentage },
        ]}
        animate={{
          duration: 2000,
        }}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
      />
    </>
  );
}

export default ExpenseChart;
