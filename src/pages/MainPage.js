import React from "react";
import { NavBar } from "../components/NavBar";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";

const MainPage = () => {
    return (
        <div>
            <NavBar/>
            <AboutMe/>
            <Skills/>
        </div>
    )
}
export default MainPage;