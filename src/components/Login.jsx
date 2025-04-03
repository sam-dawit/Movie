import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "./Auth";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordView = () => setShowPassword(!showPassword);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg text-amber-50">
                <h1 className="text-lg md:text-xl font-semibold ">
                    Welcome Back
                </h1>
                <p className="text-xs md:text-sm text-gray-500 text-center">
                    Don't have an account?
                    <a href="/" className="text-white hover:underline">
                        {" "}
                        Sign up
                    </a>
                </p>

                <div className="w-full flex flex-col gap-3">
                    <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl">
                        <MdAlternateEmail />
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                        />
                    </div>

                    <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl relative">
                        <FaFingerprint />
                        <input
                            type={showPassword ? "password" : "text"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                        />
                        {showPassword ? (
                            <FaRegEyeSlash
                                className="absolute right-5 cursor-pointer"
                                onClick={togglePasswordView}
                            />
                        ) : (
                            <FaRegEye
                                className="absolute right-5 cursor-pointer"
                                onClick={togglePasswordView}
                            />
                        )}
                    </div>
                </div>

                <button
                    className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 text-sm md:text-base"
                    onClick={handleLogin}
                >
                    Login
                </button>

                <div className="relative w-full flex items-center justify-center py-3">
                    <div className="w-2/5 h-[2px] bg-gray-800"></div>
                    <h3 className="font-lora text-xs md:text-sm px-4 text-gray-500">
                        Or
                    </h3>
                    <div className="w-2/5 h-[2px] bg-gray-800"></div>
                </div>

                <div className="w-full flex items-center justify-evenly md:justify-between gap-2">
                    <div className="p-2 md:px-6 lg:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
                        <BsApple className="text-lg md:text-xl" />
                    </div>
                    <div className="p-1 md:px-6 lg:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
                        <FcGoogle className="text-lg md:text-3xl" />
                    </div>
                    <div className="p-2 md:px-6 lg:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
                        <FaXTwitter className="text-lg md:text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
