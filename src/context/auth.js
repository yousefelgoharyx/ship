import React, { useContext, useState, createContext, useEffect } from "react";
import axios from "../util/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const login = (email, password) => {
    return axios
      .post("login.php", { email, password })
      .then(async (res) => {
        await AsyncStorage.setItem("token", res.data.token);
        await AsyncStorage.setItem("user", JSON.stringify(res.data));
        setAuth({
          token: res.data.token,
          user: res.data,
          error: false,
          loading: false,
        });
      })
      .catch(() => {
        setAuth({
          token: null,
          user: null,
          error: true,
          loading: false,
        });
      })
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
