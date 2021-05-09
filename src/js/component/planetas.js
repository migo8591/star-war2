import React, { useEffect, useContext } from "react";
import { Card, Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import planetas from "../../img/planetas.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planetas = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
	}, []);

	return (
		<div className="mt-3">
			{/* <span>{JSON.stringify(store.favorites)}</span> */}

			<div className="wrapper">
				{store.planetsList.map((item, index) => {
					return (
						<div className="item" key={index}>
							<Card className="bg-warning" style={{ width: "18rem" }}>
								<Card.Img variant="top" src={planetas} />
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>
										<p>
											<strong>Population:</strong>
											<span>{item.population}</span>
										</p>
										<p>
											<strong>Climate:</strong>
											<span>{item.climate}</span>
										</p>
										<p>
											<strong>diameter:</strong>
											<span>{item.diameter}</span>
										</p>
									</Card.Text>
									<ButtonToolbar aria-label="Toolbar with button groups">
										<Link to={"/detallesPlanetas/" + index}>
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
