import React from "react";
import { Navbar, Image, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import starlogo from "../../img/starlogo.png";

export const NavbarMenu = () => {
	return (
		<div className="d-flex flex-column">
			<Navbar className="container-flux  bg-warning">
				<Navbar.Brand>
					<Link to="/">
						<Image src={starlogo} width="40" height="40" alt="Star Wars" />
					</Link>
				</Navbar.Brand>

				<Nav className="mr-auto">
					<Link className="nav-link text-primary" to="/planetas">
						Planetas
					</Link>
					<Link className="nav-link text-primary" to="/personas">
						Personas
					</Link>
				</Nav>

				{/* <DropdownButton id="dropdown-basic-button" title="Favoritos">
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</DropdownButton> */}
				<div className="ml-auto">
					<DropdownButton id="dropdown-basic-button" title="Favoritos">
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</DropdownButton>
				</div>
			</Navbar>
		</div>
	);
};
