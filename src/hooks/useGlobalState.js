import { useContext } from "react";
import { GlobalState } from "../context/GlobalState.jsx";

function useGlobalState() {
  const context = useContext(GlobalState);
  return context;
}

export default useGlobalState;
