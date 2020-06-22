import * as React from "react";
import DrawerStack from "./app/routes/Drawer";
import store from "./app/src/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <DrawerStack />
    </Provider>
  );
}
