import useGlobalState from "../hooks/useGlobalState";

function Balance() {
  const data = useGlobalState();

  return <div>Balance {JSON.stringify(data, null, 2)}</div>;
}

export default Balance;
