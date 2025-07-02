import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import type { JSX } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GeneralLayout(): JSX.Element {
    return (
        <Container fluid className="d-flex flex-column min-vh-100">
            <Header />
            <Row className="flex-grow-1">
                <Col>
                    <Outlet />
                </Col>
            </Row>
            <Footer />
        </Container>
    );
};