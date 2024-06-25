import React, { createContext, useContext, useState } from 'react';
import { Backdrop, CircularProgress, Snackbar } from '@mui/material';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ display: false, data: null });
  const [snackBar, setSnackBar] = useState({ display: false, message: '' });

  const showSnackBar = (message) => {
    setSnackBar({ display: true, message });
  };

  return (
    <GlobalStateContext.Provider
      value={{ userData, setUserData, loading, setLoading, popup, setPopup, snackBar, showSnackBar }}
    >
      {children}
      <Snackbar
        open={snackBar.display}
        autoHideDuration={2000}
        message={snackBar.message}
        onClose={() => setSnackBar({ display: false, message: '' })}
      />
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={popup.display}>
        {popup.data}
      </Backdrop>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);