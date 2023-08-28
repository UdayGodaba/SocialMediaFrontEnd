import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "scenes/homepage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Alert, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme";



function App() {

  useEffect(() => {
    setTimeout(() => {
      setNotification(false);
    }, 8000);
  }, []);

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  const [notification, setNotification] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {notification &&
            <Alert severity="info">Please do wait for few seconds for the first login/register as backend is hosted on a free hosting service the free instance types will spin down with inactivity.</Alert>
          }
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;