import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { NavbarMenu } from "./component/navbarMenu";
import { Footer } from "./component/footer";
import { Planetas } from "./views/planetas";
import { Personas } from "./views/personas";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<Container>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Row>
						<Col>
							<NavbarMenu />
						</Col>
					</Row>
					<Row>
						<Col>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/planetas" component={Planetas} />
								<Route exact path="/personas" component={Personas} />
							</Switch>
						</Col>
					</Row>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</Container>
	);
};

export default injectContext(Layout);
