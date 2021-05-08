import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import personajes from "../../img/personajes.jpg";
import { Image } from "react-bootstrap";
import "../../styles/detallesPersonas.scss";

export const DetallesPlanetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div id="detalles">
			<div className="container mt-5">
				<div className="row">
					<div className="col-sm mt-3">
						<Image src={personajes} width={400} height={300} alt="Star Wars" />
					</div>
					<div className="col-sm text-center mt-5">
						<h1>{store.planetsList[params.theid].name}</h1>
						<p id="descripcion">
							During the Clone Wars, a coup orchestrated by Death Watch topples the pacifist regime of the
							New Mandalorians and returns the armored warrior culture to a position of power over the
							isolated world. What the average Mandalorian citizen does not realize, however, is that the
							takeover is in truth masterminded by a secret syndicate of criminals the Shadow Collective
							led by Maul. Mauls loyal Mandalorians modify their armor to reflect allegiance to the Dark
							Lord. These super commandos wear armor of red and black, and some even fashion horns atop
							their helmets, to better resemble their Nightbrother leader. During the Siege of Mandalore,
							Gar Saxon leads the elite fighting force.
						</p>
					</div>
					<table className="table m-3">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Climate</th>
								<th scope="col">Population</th>
								<th scope="col">Orbital Periodo</th>
								<th scope="col">Rotation Period</th>
								<th scope="col">Diameter</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{store.planetsList[params.theid].name}</td>
								<td>{store.planetsList[params.theid].climate}</td>
								<td>{store.planetsList[params.theid].population}</td>
								<td>{store.planetsList[params.theid].orbital_period}</td>
								<td>{store.planetsList[params.theid].rotation_period}</td>
								<td>{store.planetsList[params.theid].diameter}</td>
							</tr>
						</tbody>
					</table>
					<div className="container">
						<div className="row">
							<div className="col-9">
								<Link to="/">
									<button type="button" className="btn btn-primary mr-2">
										Regresar
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

DetallesPlanetas.propTypes = {
	match: PropTypes.object
};
