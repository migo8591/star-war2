import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import personajes from "../../img/personajes.jpg";
import { Image } from "react-bootstrap";
import "../../styles/detallesPersonas.scss";

export const DetallesPersonas = props => {
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
						<h1>{store.peopleList[params.theid].name}</h1>
						<p>
							A proud world with a rich warrior culture, Mandalore is home to various clans united under
							Bo-Katan Kryze, wielder of the Darksaber.
						</p>
					</div>
					<table className="table m-3">
						<thead>
							<tr>
								<th scope="col">Nombre</th>
								<th scope="col">Raza</th>
								<th scope="col">Sexo</th>
								<th scope="col">Edad</th>
								<th scope="col">Peso</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Rocky</td>
								<td>Boxer</td>
								<td>Macho</td>
								<td>2 años</td>
								<td>15 kg</td>
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
							<div className="col-3 d-flex justify-content-end">
								<Link to="/adoptform">
									<button type="button" className="btn btn-primary ">
										Formulario de adopción
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

DetallesPersonas.propTypes = {
	match: PropTypes.object
};
