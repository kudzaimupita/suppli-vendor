import React from "react";
import { Container, Row, Col } from "reactstrap";

class AdminFooter extends React.Component {
	render() {
		return (
			<>
				<footer
					className="py-5"
					style={{ backgroundColor: "#172b4d", backgroundSize: "full" }}
				>
					<Container>
						<Row className="align-items-center justify-content-xl-between">
							<Col xl="6">
								<div className="copyright text-center text-xl-left text-muted font-weight-bold ml-1">
									© 2021 Suppl-i
								</div>
							</Col>
						</Row>
					</Container>
				</footer>
			</>
		);
	}
}

export default AdminFooter;
