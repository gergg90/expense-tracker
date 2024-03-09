import useGlobalState from "../hooks/useGlobalState";

function Balance() {
  const { total } = useGlobalState();

  return <div>Balance {total}</div>;
}

export default Balance;
