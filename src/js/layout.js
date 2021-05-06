import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";

import injectContext from "./store/appContext";

import { NavbarMenu } from "./component/navbarMenu";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<NavbarMenu />
				<Container>
					<ScrollToTop>
						<Row>
							<Col>
								<Switch>
									<Route exact path="/" component={Home} />
									{/* <Route exact path="/planetas" component={Planetas} /> */}
								</Switch>
							</Col>
						</Row>

						<Footer />
					</ScrollToTop>
				</Container>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
