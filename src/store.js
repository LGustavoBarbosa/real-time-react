import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import * as reducers from "./state";
import rootSaga from "./state/rootSagas";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user", "cars"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, enhancer);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
