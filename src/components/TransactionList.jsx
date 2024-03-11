import useGlobalState from "../hooks/useGlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <>
      {transactions.length > 0 ? (
        transactions.map((transaction) => {
          return (
            <div key={transaction.id}>
              <h3>
                Transacciones: {transaction.description} - amount: $
                {transaction.amount}
              </h3>
              <button onClick={() => deleteTransaction(transaction.id)}>
                ❌
              </button>
            </div>
          );
        })
      ) : (
        <p>No hay Transacciones.</p>
      )}
    </>
  );
}

export default TransactionList;
