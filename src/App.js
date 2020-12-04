import React, { useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import Cover from './pages/Cover/Cover';
import PrivateRoutes from './routes/PrivateRoutes';
import { getUser } from './services/authService';
import { AuthContext } from './utils/contexts';

function App() {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [loadUser, setLoadUser] = useState(false);

  useEffect(() => {
    setUser(getUser());
    setRefresh(false);
    setLoadUser(true);
  }, [refresh]);

  if (!loadUser) return null;

  return (
    <AuthContext.Provider value={{
      user,
      setRefresh
    }}>
      {
        !user ? (<PrivateRoutes />) : (<Cover />)
      }
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  );
}

export default App;
