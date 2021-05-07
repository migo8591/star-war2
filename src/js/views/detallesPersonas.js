import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Table, Media, Container, Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";
import personajes from "../../img/personajes.jpg";
import "../../styles/detallesPersonas.scss";

export const DetallesPersonas = props => {
	const { id } = useParams();
	const intId = parseInt(Id);
	const history = useHistory;

	const goBack = () => {
		history.goBack();
	};
	return (
		<Container>
			<Media className="mt-5">
				{store.planetsList.map((item, index) => {
					if (index == intId) {
						return (
							<div key={index}>
								<Row>
									<Col>
										<Card.Img variant="top" src={personajes} />
									</Col>
									<Col>
										<Media.Body className="text-center">
											<h5>{each.name}</h5>
											<p>
												During the Clone Wars, a coup orchestrated by Death Watch topples the
												pacifist regime of the New Mandalorians and returns the armored warrior
												culture to a position of power over the isolated world. What the average
												Mandalorian citizen does not realize, however, is that the takeover is
												in truth masterminded by a secret syndicate of criminals the Shadow
												Collective led by Maul. Mauls loyal Mandalorians modify their armor to
												reflect allegiance to the Dark Lord. These super commandos wear armor of
												red and black, and some even fashion horns atop their helmets, to better
												resemble their Nightbrother leader. During the Siege of Mandalore, Gar
												Saxon leads the elite fighting force.
											</p>
										</Media.Body>
									</Col>
								</Row>
								<Table responsive="sm">
									<thead>
										<tr>
											<th>Name</th>
											<th>Birth Year</th>
											<th>Gender</th>
											<th>Heigth</th>
											<th>Skin Color</th>
											<th>Eye Color</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.name}</td>
											<td>{each.birth_year}</td>
											<td>{each.gender}</td>
											<td>{each.height}</td>
											<td>{each.skin_color}</td>
											<td>{each.eye_color}</td>
										</tr>
									</tbody>
								</Table>
								<Button variant="dark" onClick={() => goBack()}>
									Go Back
								</Button>
							</div>
						);
					}
				})}
			</Media>
		</Container>
	);
};

// Petdetail.propTypes = {
// 	match: PropTypes.object
// };
