import { createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/index";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["yearReducer", "branchReducer", "semReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger())
);

export const persistedStore = persistStore(store);

export default { store, persistedStore };
