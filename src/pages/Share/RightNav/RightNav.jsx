import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
	return (
		<div>
			<h4>Login With</h4>
			<Button
				variant="outline-primary"
				className="mb-2 d-flex align-items-center justify-content-between">
				<FaGoogle /> Login with Google
			</Button>
			<Button
				variant="outline-secondary"
				className="d-flex align-items-center justify-content-between">
				<FaGithub /> Login with Github
			</Button>
			<div>
				<ListGroup>
					<ListGroup.Item> <FaFacebook/> facebook</ListGroup.Item>
					<ListGroup.Item><FaTwitter/> twitter</ListGroup.Item>
					<ListGroup.Item><FaInstagram/> instagram</ListGroup.Item>
				</ListGroup>
			</div>
			<QZone></QZone>
		</div>
	);
};

export default RightNav;
