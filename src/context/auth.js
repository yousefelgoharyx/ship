import React, { useContext, useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import fetchUser from "../api/fetchUser";
const AuthContext = createContext();
const AuthProvider = (props) => {
  const [auth, setAuth] = useState({
    token: null,
    user: null,
    error: false,
    loading: true,
  });
  const resetError = () => {
    setAuth({
      token: null,
      user: null,
      error: false,
      loading: false,
    });
  };
  const login = async () => {
    try {
      const user = await fetchUser();
      await AsyncStorage.setItem("token", user.token);
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setAuth({
        token: user.token,
        user: user,
        error: false,
        loading: false,
      });
    } catch {
      setAuth({
        token: null,
        user: null,
        error: true,
        loading: false,
      });
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    setAuth({
      user: null,
      error: false,
      token: null,
      loading: false,
    });
  };
  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const jsonUser = await AsyncStorage.getItem("user");
        const user = jsonUser != null ? JSON.parse(jsonUser) : null;
        setAuth({
          loading: false,
          token,
          user,
          error: false,
        });
      } catch {
        setAuth({
          loading: false,
          token: null,
          user: null,
          error: true,
        });
      }
    })();
  }, []);
  return (
    <AuthContext.Provider value={{ auth, login, logout, resetError }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export { AuthContext, AuthProvider, useAuth };
