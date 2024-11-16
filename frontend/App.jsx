import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connect from "./pages/connect";
import Login from "./pages/login";

export default function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route key={1} path="/" element={<Home />}/>
                <Route key={2} path="/connect" element={<Connect />}/>
                <Route key={2} path="/users/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
        // <>
        //     <Navbar />
        //     <Background />
        //     {/* <Home /> */}
        // </>
    )
}