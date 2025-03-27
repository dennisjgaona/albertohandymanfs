import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

import { auth } from "../firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, login);
    return unsubscribe;
  }, []);

  const login = async (data) => {
    if (data) {
      setUser({ ...data });
      setUserLoggedIn(true);
    } else {
      setUser(null);
      setUserLoggedIn(false);
    }

    setLoading(false);
    navigate("/admin");
  };

  const logout = () => {
    setUser(null);
    signOut(auth)
      .then(() => {
        alert("Successfully Signed Out");
      })
      .catch((error) => {
        alert(error);
      });
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      userLoggedIn,
      loading,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  return useContext(AuthContext);
}
