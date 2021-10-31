import React from "react";
import 'bootstrap/dist/css/boostrap.css'
import { Nav, navbar, NavDropdown } from 'react-bootstrap'


function Accueil(){
    return(
        <div className="Acceuil">
        <Navbar bg="dark" variant="dark" expand="lg">

        <navbar.Brand>
            Pokemon
            <img src={pokemeaccueil.png} />
        </navbar.Brand>

        <Nav>

            <Nav.link href="Recherche">Recherche</Nav.link>

            <NavDropdown title="Parametre">
                <Navdropdouwn.Item href="Paremetre/Profil"></Navdropdouwn.Item>
                <Navdropdouwn.Item href="Parametre/Notifications"></Navdropdouwn.Item>
                <Navdropdouwn.Item href="Parametre/Séggcurité"></Navdropdouwn.Item>
                <NavDropdown.Item href="Parametre/Deconnection"></NavDropdown.Item>
                <NavDropdown.Divider/>

            </NavDropdown>
        </Nav>
        </Navbar>

        </div>
    )
}

export default Accueil; 
