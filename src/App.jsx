import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/login";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Auth from "./components/Auth";
import Protected from "./components/Protected";

const App = () => {
    return (
        <div>
            <Auth>
                <Routes>
                    <Route index path="/" element={<Login />} />
                    <Route
                        element={
                            <Protected>
                                <Layout />
                            </Protected>
                        }
                    >
                        <Route path="/main" element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Auth>
        </div>
    );
};

export default App;
