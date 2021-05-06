import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Personas } from "../component/personas";
import { Planetas } from "../component/planetas";

export const Home = () => (
	<div className="text-center">
		<h1>Personas</h1>
		<Personas />
		<h1>Planetas</h1>
		<Planetas />
	</div>
);
