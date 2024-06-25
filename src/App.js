import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { HomePage } from './pages';
import { NavBar } from './components';
import { GlobalStateProvider, useGlobalState } from './contexts/GlobalStateContext';

const AppContent = () => {
  const { userData, setUserData, loading, setLoading, popup, setPopup, snackBar, showSnackBar } = useGlobalState();

  useEffect(() => {
    console.log('Current User Data:', userData);
  }, [userData, setUserData]);

  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </Box>
  );
};

const App = () => {
  return (
    <GlobalStateProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </GlobalStateProvider>
  );
};

export default App;
