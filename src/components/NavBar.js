import React from "react";

const NavBar = () => {
    return (
        <div>
            <div className="navegador">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Sobre mi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Habilidades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}
export { NavBar };