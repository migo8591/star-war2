import React, { useContext } from "react";
import { Navbar, Image, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import starlogo from "../../img/starlogo.png";
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-column">
			<Navbar className="container-flux  bg-warning">
				<Navbar.Brand className="mx-auto">
					<Link to="/">
						<Image src={starlogo} width="40" height="40" alt="Star Wars" />
					</Link>
				</Navbar.Brand>

				<Nav className="mx-auto">
					{/* <Link className="nav-link text-primary" to="/planetas">
						Planetas
					</Link>
					<Link className="nav-link text-primary" to="/personas">
						Personas
					</Link> */}
				</Nav>

				<div className="mx-auto">
					<DropdownButton
						id="dropdown-basic-button"
						variant="primary"
						title={"Favorites " + store.favorites.length}>
						{store.favorites.length == 0 ? (
							<Dropdown.Item>Empty</Dropdown.Item>
						) : (
							store.favorites.map((item, index) => {
								return (
									<Dropdown.Item
										eventKey={index}
										key={index}
										onClick={() => actions.deleteFavorite(index)}>
										{item.type == "people" ? (
											<div>
												<i>{item}</i>
												<i className="far fa-trash-alt" />
											</div>
										) : (
											<div>
												<i>{item}</i>
												<i className="far fa-trash-alt" />
											</div>
										)}
									</Dropdown.Item>
								);
							})
						)}
					</DropdownButton>
				</div>
			</Navbar>
		</div>
	);
};
