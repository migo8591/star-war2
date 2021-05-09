import React, { useEffect, useContext } from "react";
import { Card, Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import personajes from "../../img/personajes.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Personas = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<div>
			{/* <span>{JSON.stringify(store.favorites)}</span> */}

			<div className="wrapper">
				{store.peopleList.map((item, index) => {
					return (
						<div className="item" key={index}>
							<Card className="bg-warning" style={{ width: "18rem" }}>
								<Card.Img variant="top" src={personajes} />
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>
										<p>
											<strong>Gender:</strong>
											<span>{item.gender}</span>
										</p>
										<p>
											<strong>Hair-Color:</strong>
											<span>{item.hair_color}</span>
										</p>
										<p>
											<strong>Eye-Color:</strong>
											<span>{item.eye_color}</span>
										</p>
									</Card.Text>
									<ButtonToolbar aria-label="Toolbar with button groups">
										<Link to={"/detallesPersonas/" + index}>
											<ButtonGroup
												className="ml-3 justify-content-between"
												aria-label="First group">
												<Button variant="success">Learn more!</Button>
											</ButtonGroup>
										</Link>
										<ButtonGroup className=" ml-5" aria-label="Second group">
											{store.favorites.includes(item.name) ? null : (
												<Button
													onClick={() => actions.setFavorites(item.name)}
													variant="danger">
													<i className="far fa-heart" />
												</Button>
											)}
										</ButtonGroup>
									</ButtonToolbar>
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
		</div>
	);
};
