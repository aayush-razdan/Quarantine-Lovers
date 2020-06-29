import * as React from "react";
import DrawerStack from "./app/routes/Drawer";
import { createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { PersistGate } from "redux-persist/es/integration/react";
import rootReducer from "./app/src/reducers/index";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["yearReducer", "branchReducer", "semReducer", "gpaReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(createLogger()));

const persistedStore = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <DrawerStack />
      </PersistGate>
    </Provider>
  );
}
