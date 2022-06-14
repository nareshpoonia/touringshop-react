import { createContext } from "react";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useCartContext } from "../context/cart-context";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("token") || undefined
  );
  async function signUp(data) {
    try {
      const response = await axios.post("/api/auth/signup", data);
      localStorage.setItem("token", response.data.encodedToken);
      setAuthToken(response.data.encodedToken);
      const previousPath = location?.state?.from?.pathname || "*";
      navigate(previousPath);
    } catch (error) {
      console.error(error);
    }
  }
  async function login(data) {
    try {
      console.log(data);
      const response = await axios.post("/api/auth/login", data);
      console.log(response);
      localStorage.setItem("token", response.data.encodedToken);
      setAuthToken(response.data.encodedToken);
      const previousPath = location?.state?.from?.pathname || "*";
      navigate(previousPath);
    } catch (error) {
      console.error(error);
    }
  }
  async function guestLogin() {
    try {
      const guestLoginData = {
        email: "civiltocs@gmail.com",
        password: "yesitspossible",
      };
      const response = await axios.post("/api/auth/login", guestLoginData);
      localStorage.setItem("token", response.data.encodedToken);
      setAuthToken(response.data.encodedToken);
      const previousPath = location?.state?.from?.pathname || "*";
      navigate(previousPath);
    } catch (error) {
      console.error(error);
    }
  }
  function logout() {
    console.log("In func");
    localStorage.clear();
    setAuthToken("");
  }

  return (
    <AuthContext.Provider
      value={{ authToken, signUp, login, guestLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
