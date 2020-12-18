import { createContext, useContext } from "react";
import initStores from "./root-store";

const StoreContext = createContext(null);

export const Provider = ({ children }) => {
  const store = initStores();
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
