import React from "react";
import { useAuth } from "./Auth";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const { user } = useAuth();

    return user ? children : <Navigate to="/" />;
};

export default Protected;
