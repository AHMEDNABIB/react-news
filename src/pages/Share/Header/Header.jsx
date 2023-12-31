import moment from "moment";

import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import logo from "../../../assets/logo.png";

const Header = () => {
	return (
		<Container>
			<div className="text-center">
				<img src={logo} alt="" />
				<p className="text-secondary">
					<small>Journalism Without Fear or Favour</small>
				</p>
				<p>{moment().format("dddd, MMMM Do YYYY")}</p>
			</div>
			<div className="d-flex ">
				<Button variant="danger">Latest </Button>
				<Marquee className="text-danger" speed={50}>
					I can be a React component, multiple React components, or
					just some text.
				</Marquee>
			</div>
		</Container>
	);
};

export default Header;
