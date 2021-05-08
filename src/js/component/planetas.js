import React, { useEffect, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import personajes from "../../img/personajes.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planetas = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
	}, []);

	return (
		<div className="mt-3">
			<span>{JSON.stringify(store.favorites)}</span>

			<div className="wrapper">
				{store.planetsList.map((item, index) => {
					return (
						<div className="item" key={index}>
							<Card className="bg-warning" style={{ width: "18rem" }}>
								<Card.Img variant="top" src={personajes} />
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
									<Link to={"/detallesPlanetas/" + index}>
										<Button variant="success">Learn more!</Button>
									</Link>
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
		</div>
	);
};
