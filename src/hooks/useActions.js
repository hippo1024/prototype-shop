// hooks/useActions.js

import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  const { addToOrder, remove, removeAll, checkOut} = useContext(AppStateContext);

  return { addToOrder, remove, removeAll, checkOut};
}
