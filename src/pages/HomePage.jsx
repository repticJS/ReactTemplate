import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../contexts/GlobalStateContext';

const HomePage = () => {
  
  const { userData, setLoading, showSnackBar, setPopup } = useGlobalState();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'HomePage';
  }, []);

  return (
    <Box>

    </Box>
  );
};

export default HomePage;
