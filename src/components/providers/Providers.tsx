import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../../redux/store";
import { Toaster } from "../toast/Toaster";

type TProvidersProps = { children?: React.ReactNode };

const Providers = ({ children }: TProvidersProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div></div>} persistor={persistor}>
        <LazyMotion features={domAnimation}>
          {children}
          <Toaster position="top-center" />
        </LazyMotion>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
