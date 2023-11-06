
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Share/Footer/Footer";
import Header from "../pages/Share/Header/Header";
import LeftNav from "../pages/Share/LeftNav/LeftNav";
import RightNav from "../pages/Share/RightNav/RightNav";

const Main = () => {
	return (
		<>
			<Header></Header>
			<Container>
				
				<Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h2>Main Section Coming</h2>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
				</Row>
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Main;
