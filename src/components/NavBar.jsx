import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useGlobalState } from '../contexts/GlobalStateContext';
const NavBar = () => {

  const { userData, setUserData, loading, setLoading, popup, setPopup, snackBar, showSnackBar } = useGlobalState();
  const [Open, setOpen] = useState(false)
  
  return (
  <Box> 
   
  </Box>
  )
}
  
export default NavBar 