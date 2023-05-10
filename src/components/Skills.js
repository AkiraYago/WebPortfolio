import React from "react";
import java_logo from "../components/img/java-logo.png";
import springboot_logo from "../components/img/springboot-logo.png";
import mysql_logo from "../components/img/mysql-logo.png";

const Skills = () => {
    return (
        <div className="skills">
            <h3>Lenguajes y Herramientas</h3>
            <div>
                <img src={java_logo} className="col-4"></img>
                <img src={springboot_logo} className="col-4"></img>
                <img src={mysql_logo} className="col-4"></img>
            </div>
        </div>
    )
}
export { Skills };