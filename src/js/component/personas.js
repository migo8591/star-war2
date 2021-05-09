import React, { useEffect, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import personajes from "../../img/personajes.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Personas = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	});

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
									<Link to={"/detallesPersonas/" + index}>
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
