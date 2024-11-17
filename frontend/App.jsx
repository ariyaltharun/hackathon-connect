import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connect from "./pages/connect";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route key={1} path="/" element={<Home />}/>
                <Route key={2} path="/connect" element={<Connect />}/>
                <Route key={3} path="/users/login" element={<Login />}/>
                <Route key={4} path="/users/register" element={<SignUp />}/>
            </Routes>
        </BrowserRouter>
        // <>
        //     <Navbar />
        //     <Background />
        //     {/* <Home /> */}
        // </>
    )
}