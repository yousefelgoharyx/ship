import React, { useContext, useState, createContext } from "react";
import axios from "../util/axios";
const AuthContext = createContext();
const b64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==";
const AuthProvider = (props) => {
  const [user, setUser] = useState({
    isLogged: false,
    token: null,
    image: null,
    username: null,
    email: null,
  });

  const login = async (username, password) => {
    const { data } = await axios.post("login.php", {
      email: "test@test.com",
      password: 123,
    });
    setUser({
      isLogged: true,
      token: data[0].token,
      image: data[0].pic,
      username: data[0].name,
      email: data[0].email,
    });
  };

  const logout = () => {
    setUser({
      isLogged: false,
      token: null,
      image: null,
      username: null,
      email: null,
    });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export { AuthContext, AuthProvider, useAuth };
