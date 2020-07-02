import * as React from "react";
import DrawerStack from "./app/routes/Drawer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistedStore } from "./app/src/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <DrawerStack />
      </PersistGate>
    </Provider>
  );
}
