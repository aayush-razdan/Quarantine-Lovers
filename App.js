import * as React from "react";
import MainRoute from "./app/routes/MainRoute";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistedStore } from "./app/src/store/index";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <MainRoute />
      </PersistGate>
    </Provider>
  );
}
