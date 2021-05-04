import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistCombineReducers, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { gameCards } from "./gameCards";

const config = {
  key: "root",
  storage: AsyncStorage,
  debug: true,
};

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      gameCards,
    }),
    // applyMiddleware(thunk, logger)
    applyMiddleware(thunk)
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
