import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
function App(){
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;