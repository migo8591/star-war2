import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const detallesPersonas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let nameStyle = { fontSize: "65px", marginTop: "100px", color: "#f6b26b" };

	let columnStyle = { color: "#005073" };

	let textStyle = { fontSize: "20px", marginTop: "35px" };

	let rowStyle = { marginTop: "20px" };

	let buttonStyle = { marginBottom: "20px", marginTop: "20px" };
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-sm">
					<img
						width={500}
						height={500}
						className="align-self-center mr-3"
						src={personajes}
						alt="Generic placeholder"
					/>
				</div>
				<div className="col-sm text-center">
					<h5 style={nameStyle}> {store.perros[params.theid].name}</h5>
					<p style={textStyle}>{store.perros[params.theid].history}</p>
					<p style={textStyle}>{store.perros[params.theid].other}</p>
				</div>
				<div className="container mt-5">
					<div className="row d-flex align-items-center" style={columnStyle}>
						<div className="col-2 text-center">
							<h4>Nombre</h4>
						</div>
						<div className="col-2 text-center">
							<h4>Sexo</h4>
						</div>
						<div className="col-2 text-center">
							<h4>Edad</h4>
						</div>
						<div className="col-2 text-center">
							<h4>Comportamiento</h4>
						</div>
						<div className="col-2 text-center">
							<h4>Raza</h4>
						</div>
						<div className="col-2 text-center">
							<h4>Tamaño</h4>
						</div>
					</div>
					<hr className="my-4 bg-warning" />
					<div className="row d-flex align-items-center" style={rowStyle}>
						<div className="col-2 text-center">
							<h5>{store.perros[params.theid].name}</h5>
						</div>
						<div className="col-2 text-center">
							<h5>{store.perros[params.theid].sex}</h5>
						</div>
						<div className="col-2 text-center">
							<h5>{store.perros[params.theid].age}</h5>
						</div>
						<div className="col-2 text-center">
							<h5>{store.perros[params.theid].behaviour}</h5>
						</div>
						<div className="col-2 text-center">
							<h5>{store.perros[params.theid].breed}</h5>
						</div>
						<div className="col-2 text-center">
							<h5>{store.perros[params.theid].size}</h5>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-9">
							<Link to="/">
								<button type="button" className="btn btn-primary mr-2" style={buttonStyle}>
									Regresar
								</button>
							</Link>
						</div>
						<div className="col-3 d-flex justify-content-end">
							<Link to="/adoptform">
								<button type="button" className="btn btn-primary" style={buttonStyle}>
									Formulario de adopción
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Dogdetail.propTypes = {
	match: PropTypes.object
};
