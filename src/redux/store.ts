import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import configReducer from "./reducers/config-reducer";
import numbersReducer from "./reducers/numbers-reducer";

const reducers = combineReducers({
  // ** Need to add after creating redux slice
  config: configReducer,
  numbers: numbersReducer,
});

const persistedReducer = persistReducer({ key: "root", version: 1, storage: storage, whitelist: ["config", "numbers"] }, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (gDM) => gDM({ serializableCheck: false }),
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
export default store;
