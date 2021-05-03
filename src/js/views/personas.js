import React, { useEffect, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import walmart from "../../img/walmart.png";

export const Personas = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		// <Jumbotron>
		// 	<h1>Listado de personas</h1>
		// 	<span>{JSON.stringify(store.peopleList)}</span>
		// </Jumbotron>
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={walmart} alt="Star Wars" />
			<Card.Body>
				<Card.Title>
					{/* {JSON.stringify(store.peopleList)} */}
					{store.peopleList.map((item, index) => {
						return <p key={index}>{item.name}</p>;
					})}
				</Card.Title>
				<Card.Text>V</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};
