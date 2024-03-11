import useGlobalState from "../hooks/useGlobalState";

function Balance() {
  const data = useGlobalState();

  return <div>Balance</div>;
}

export default Balance;
