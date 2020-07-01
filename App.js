import * as React from "react";
import DrawerStack from "./app/routes/Drawer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistedStore } from "./app/src/store/index";

import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyA6pJCz3NkPCp2pyh8he2oF3pn5NaM6Ovg",
  authDomain: "quarantineloversexpo.firebaseapp.com",
  databaseURL: "https://quarantineloversexpo.firebaseio.com",
  projectId: "quarantineloversexpo",
  storageBucket: "quarantineloversexpo.appspot.com",
  messagingSenderId: "1039687482395",
  appId: "1:1039687482395:web:d73bf6d7cd6e6fa8488cbe",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <DrawerStack />
      </PersistGate>
    </Provider>
  );
}
