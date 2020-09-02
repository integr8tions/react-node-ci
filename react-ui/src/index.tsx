import React from "react";
import ReactDOM from "react-dom";
import {
  RecoilRoot,
  MutableSnapshot,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useTransactionObservation_UNSTABLE,
} from "recoil";
import user from "state/user/me";
// import orders from "recoil/order/list";

import App from "./App";

import "./index.scss";

const PERSISTENT_ATOMS = [user];

const initializeState = ({ set }: MutableSnapshot) => {
  PERSISTENT_ATOMS.forEach((atom) => {
    const persistedState = localStorage.getItem(atom.key);
    if (persistedState) {
      set(atom, JSON.parse(persistedState).value);
    }
  });
};

function PersistenceObserver() {
  useTransactionObservation_UNSTABLE(({ atomValues, modifiedAtoms }: any) => {
    modifiedAtoms.forEach((modifiedAtom: any) => {
      localStorage.setItem(modifiedAtom, JSON.stringify({ value: atomValues.get(modifiedAtom) }));
    });
  });
  return null;
}

ReactDOM.render(
  // <React.StrictMode>
  <RecoilRoot initializeState={initializeState}>
    <PersistenceObserver />
    <App />
  </RecoilRoot>,
  // </React.StrictMode>,
  document.getElementById("root"),
);
