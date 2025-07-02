import type { JSX } from "react";
import { 
    Carousel, 
    Container, 
    Row, 
    Col, 
    Card, 
    Alert, 
    Button, 
    Badge 
} from "react-bootstrap";
import "../styles/home.css";

export default function Home(): JSX.Element {
    return (
        <Container className="py-4">
            {/* Hero Section */}
            <Row className="mb-5">
                <Col>
                    <div className="text-center">
                        <h1 className="display-4 fw-bold text-primary mb-3">
                            <i className="bi bi-house-heart me-3"></i>
                            Bienvenido a Mi App
                        </h1>
                        <p className="lead fs-4 text-muted">
                            Esta es una aplicación de ejemplo utilizando React y Bootstrap.
                        </p>
                        <Badge bg="info" className="fs-6 mb-4">
                            <i className="bi bi-star-fill me-1"></i>
                            Sistema de Gestión Empresarial
                        </Badge>
                    </div>
                </Col>
            </Row>

            {/* Carousel Section */}
            <Row className="mb-5">
                <Col>
                    <Card className="shadow-lg border-0">
                        <Card.Body className="p-0">
                            <Carousel className="rounded" interval={3000}>
                                <Carousel.Item>
                                    <img
                                        src="/1.png"
                                        alt="Sistema de Usuarios"
                                        style={{ 
                                            width: "100%", 
                                            height: "500px", 
                                            objectFit: "cover",
                                            filter: "brightness(0.7)"
                                        }}
                                        className="d-block w-100 rounded"
                                    />
                                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                                        <h3 className="fw-bold">
                                            <i className="bi bi-people-fill me-2"></i>
                                            Gestión de Usuarios
                                        </h3>
                                        <p className="fs-5">
                                            Administra eficientemente tu base de datos de usuarios con herramientas avanzadas.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        src="/2.avif"
                                        alt="Cálculo de Nómina"
                                        style={{ 
                                            width: "100%", 
                                            height: "500px", 
                                            objectFit: "cover",
                                            filter: "brightness(0.7)"
                                        }}
                                        className="d-block w-100 rounded"
                                    />
                                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                                        <h3 className="fw-bold">
                                            <i className="bi bi-calculator me-2"></i>
                                            Cálculo de Nómina
                                        </h3>
                                        <p className="fs-5">
                                            Calcula automáticamente sueldos, bonos y deducciones de manera precisa.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        src="/3.png"
                                        alt="Reportes y Analytics"
                                        style={{ 
                                            width: "100%", 
                                            height: "500px", 
                                            objectFit: "cover",
                                            filter: "brightness(0.7)"
                                        }}
                                        className="d-block w-100 rounded"
                                    />
                                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                                        <h3 className="fw-bold">
                                            <i className="bi bi-graph-up me-2"></i>
                                            Reportes Avanzados
                                        </h3>
                                        <p className="fs-5">
                                            Genera reportes detallados y visualiza métricas importantes del sistema.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Features Cards */}
            <Row className="g-4 mb-5">
                <Col md={4}>
                    <Card className="h-100 shadow-sm border-0 hover-card">
                        <Card.Body className="text-center p-4">
                            <div className="mb-3">
                                <i className="bi bi-people-fill text-primary" style={{ fontSize: "3rem" }}></i>
                            </div>
                            <Card.Title className="h4 text-primary">Usuarios</Card.Title>
                            <Card.Text className="text-muted mb-3">
                                Gestiona el listado de usuarios registrados con funciones de búsqueda y filtrado avanzadas.
                            </Card.Text>
                            <Button variant="outline-primary" size="sm">
                                <i className="bi bi-arrow-right me-1"></i>
                                Explorar
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 shadow-sm border-0 hover-card">
                        <Card.Body className="text-center p-4">
                            <div className="mb-3">
                                <i className="bi bi-calculator text-success" style={{ fontSize: "3rem" }}></i>
                            </div>
                            <Card.Title className="h4 text-success">Cálculo de Sueldos</Card.Title>
                            <Card.Text className="text-muted mb-3">
                                Calcula el sueldo neto de cada empleado considerando bonos, deducciones e impuestos.
                            </Card.Text>
                            <Button variant="outline-success" size="sm">
                                <i className="bi bi-arrow-right me-1"></i>
                                Calcular
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 shadow-sm border-0 hover-card">
                        <Card.Body className="text-center p-4">
                            <div className="mb-3">
                                <i className="bi bi-person-plus text-warning" style={{ fontSize: "3rem" }}></i>
                            </div>
                            <Card.Title className="h4 text-warning">Registro Rápido</Card.Title>
                            <Card.Text className="text-muted mb-3">
                                Registra nuevos usuarios de forma rápida y sencilla con validación automática.
                            </Card.Text>
                            <Button variant="outline-warning" size="sm">
                                <i className="bi bi-arrow-right me-1"></i>
                                Registrar
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Alert Section */}
            <Row>
                <Col>
                    <Alert variant="info" className="border-0 shadow-sm mb-3">
                        <Alert.Heading className="h5">
                            <i className="bi bi-info-circle-fill me-2"></i>
                            ¡Bienvenido al Sistema!
                        </Alert.Heading>
                        <p className="mb-0">
                            Este es tu panel principal para gestionar usuarios y calcular nóminas. 
                            Utiliza la navegación superior para acceder a las diferentes secciones.
                        </p>
                    </Alert>
                    <Alert variant="warning" className="border-0 shadow-sm">
                        <Alert.Heading className="h6">
                            <i className="bi bi-exclamation-triangle-fill me-2"></i>
                            Recordatorio Importante
                        </Alert.Heading>
                        <p className="mb-0">
                            Recuerda completar todos los campos obligatorios antes de realizar cualquier cálculo.
                        </p>
                    </Alert>
                </Col>
            </Row>

            {/* Statistics Section */}
            <Row className="mt-5">
                <Col>
                    <Card className="bg-gradient text-white border-0 shadow-lg" style={{ background: "linear-gradient(45deg, #007bff, #6610f2)" }}>
                        <Card.Body className="text-center py-4">
                            <Row>
                                <Col md={4}>
                                    <div className="mb-2">
                                        <i className="bi bi-people" style={{ fontSize: "2.5rem" }}></i>
                                    </div>
                                    <h4 className="fw-bold">150+</h4>
                                    <p className="mb-0">Usuarios Activos</p>
                                </Col>
                                <Col md={4}>
                                    <div className="mb-2">
                                        <i className="bi bi-graph-up" style={{ fontSize: "2.5rem" }}></i>
                                    </div>
                                    <h4 className="fw-bold">98%</h4>
                                    <p className="mb-0">Precisión en Cálculos</p>
                                </Col>
                                <Col md={4}>
                                    <div className="mb-2">
                                        <i className="bi bi-clock" style={{ fontSize: "2.5rem" }}></i>
                                    </div>
                                    <h4 className="fw-bold">24/7</h4>
                                    <p className="mb-0">Disponibilidad</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
