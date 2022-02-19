import { createContext, useReducer } from "react";
import { appReducer } from "../reducers/appReducer";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    isSignUp: true,
    registered: false,
    opendedSideBar: true,
  });

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
