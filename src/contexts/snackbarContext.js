import { createContext, useContext, useState } from "react";

const snackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({ status: false, payload: "" });
  return (
    <snackbarContext.Provider value={{ snackbar, setSnackbar }}>
      {children}
    </snackbarContext.Provider>
  );
};

// custom hook for snackbar
const useSnackbar = () => useContext(snackbarContext);

export { SnackbarProvider, useSnackbar };
