// hooks/usePrototypes.js

import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototypes() {
  const { prototypes } = useContext(AppStateContext);

  return prototypes;
}

/*
// hooks/useOrders.js

import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototypes() {
  const { orders } = useContext(AppStateContext);

  return orders;
}
*/