import React from "react";
import { Router } from "react-router-dom";
import history from "../src/routes/history";
import Routes from "../src/routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import "antd/es/notification/style/css";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
