import React, { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const Auth = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (username, password) => {
        if (username == "Sami" && password == "1234") {
            setUser({ username });
            navigate("/main");
        } else {
            alert("Invalid Login");
        }
    };
    const logout = () => {
        setUser(null);
        navigate("/");
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;

export const useAuth = () => useContext(AuthContext);
