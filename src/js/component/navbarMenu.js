import React from "react";
import { Navbar, Image, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import walmart from "../../img/walmart.png";

export const NavbarMenu = () => {
	return (
		<Navbar className="navbar navbar-light bg-warning mb-3">
			<Navbar.Brand>
				<Link to="/">
					<Image src={walmart} width="40" height="40" alt="Star Wars" />
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
	);
};

{
	/* <nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav> */
}

// export const Navbar = () => {
// 	const { store, actions } = useContext(Context);
// 	return (
// 		<Navbar bg="warning" expand="lg">
// 			<Link to="/">
// 				<Navbar.Brand>
// 					<Link to="/">
// 						<Image
// 							src="https://logonoid.com/images/star-wars-logo.png"
// 							width="40"
// 							height="40"
// 							alt="Star Wars"
// 						/>
// 					</Link>
// 				</Navbar.Brand>
// 			</Link>
// 			<Nav defaultActiveKey="/home" as="ul">
// 				<Nav.Item as="li">
// 					<Nav.Link className="text-primary" href="/personas">
// 						Personas
// 					</Nav.Link>
// 				</Nav.Item>
// 				<Nav.Item as="li">
// 					<Nav.Link className="text-primary" href="/planetas">
// 						Planetas
// 					</Nav.Link>
// 				</Nav.Item>
// 			</Nav>
// 			<DropdownButton className="dropdown ml-auto" title={`Favoritos ${store.favorites.length}`}>
// 				{store.favorites.map((item, index) => {
// 					return (
// 						<Dropdown.Item key={index} href="#/action-1">
// 							{item}
// 						</Dropdown.Item>
// 					);
// 				})}
// 			</DropdownButton>
// 			{" "}
// 		</Navbar>
// 	);
// };
