import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import { AuthContext } from "./AuthContext";


import { useLocalStorage } from "usehooks-ts";

export default function App() {
  const [token, setToken] = useLocalStorage("token", null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
            path="/dashboard"
          />


          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}