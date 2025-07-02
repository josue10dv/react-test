import { useState, type JSX } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
    Alert,
    InputGroup
} from "react-bootstrap";

interface BonoCalculation {
    tarifaDiaria: number;
    diasTrabajados: number;
    totalBono: number;
}

export default function Bono(): JSX.Element {
    const [tarifaDiaria, setTarifaDiaria] = useState<string>("");
    const [diasTrabajados, setDiasTrabajados] = useState<number>(5);
    const [resultado, setResultado] = useState<BonoCalculation | null>(null);

    const opcionesDias = [5, 10, 15];

    const calcularBono = () => {
        if (!tarifaDiaria || parseFloat(tarifaDiaria) <= 0) {
            alert("Por favor, ingrese una tarifa diaria válida");
            return;
        }

        const tarifa = parseFloat(tarifaDiaria);
        const totalBono = tarifa * diasTrabajados;

        setResultado({
            tarifaDiaria: tarifa,
            diasTrabajados,
            totalBono
        });
    };

    const limpiarFormulario = () => {
        setTarifaDiaria("");
        setDiasTrabajados(5);
        setResultado(null);
    };

    const formatearMoneda = (valor: number): string => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(valor);
    };

    const getColorDias = (dias: number): string => {
        switch (dias) {
            case 5: return "success";
            case 10: return "warning";
            case 15: return "danger";
            default: return "primary";
        }
    };

    const getTipoBono = (dias: number): string => {
        switch (dias) {
            case 5: return "Bono Semanal";
            case 10: return "Bono Quincenal";
            case 15: return "Bono Mensual";
            default: return "Bono Personalizado";
        }
    };

    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col lg={10} xl={8}>
                    <Card className="shadow-lg border-0">
                        <Card.Header className="bg-warning text-dark">
                            <h2 className="mb-0 text-center">
                                <i className="bi bi-gift me-2"></i>
                                Calculadora de Bonos
                            </h2>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <Row className="mb-4">
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold">
                                            <i className="bi bi-person me-1"></i>
                                            Nombre del Empleado
                                        </Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <Card className="border-warning">
                                        <Card.Header className="bg-light">
                                            <h5 className="mb-0 text-warning">
                                                <i className="bi bi-currency-dollar me-2"></i>
                                                Configuración de Tarifa Diaria
                                            </h5>
                                        </Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="fw-bold">
                                                            Tarifa Diaria *
                                                        </Form.Label>
                                                        <InputGroup size="lg">
                                                            <InputGroup.Text>$</InputGroup.Text>
                                                            <Form.Control
                                                                type="number"
                                                                placeholder="0"
                                                                value={tarifaDiaria}
                                                                onChange={(e) => setTarifaDiaria(e.target.value)}
                                                                required
                                                            />
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <Card className="border-info">
                                        <Card.Header className="bg-light">
                                            <h5 className="mb-0 text-info">
                                                <i className="bi bi-calendar-week me-2"></i>
                                                Seleccionar Días Trabajados
                                            </h5>
                                        </Card.Header>
                                        <Card.Body>
                                            <Row className="text-center">
                                                {opcionesDias.map((dias) => (
                                                    <Col md={4} key={dias} className="mb-3">
                                                        <Card 
                                                            className={`h-100 cursor-pointer ${
                                                                diasTrabajados === dias 
                                                                    ? `border-${getColorDias(dias)} bg-${getColorDias(dias)} bg-opacity-10` 
                                                                    : 'border-secondary'
                                                            }`}
                                                            onClick={() => setDiasTrabajados(dias)}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <Card.Body className="p-3">
                                                                <div className="mb-2">
                                                                    <i 
                                                                        className={`bi bi-calendar${dias === 5 ? '' : dias === 10 ? '2' : '3'}-week`}
                                                                        style={{ fontSize: '2rem' }}
                                                                    ></i>
                                                                </div>
                                                                <h4 className={`fw-bold text-${getColorDias(dias)}`}>
                                                                    {dias} días
                                                                </h4>
                                                                <p className="mb-0 small text-muted">
                                                                    {getTipoBono(dias)}
                                                                </p>
                                                                {diasTrabajados === dias && (
                                                                    <div className="mt-2">
                                                                        <i className={`bi bi-check-circle-fill text-${getColorDias(dias)}`}></i>
                                                                    </div>
                                                                )}
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            {tarifaDiaria && (
                                <Row className="mb-4">
                                    <Col>
                                        <Alert variant="info" className="border-0 shadow-sm">
                                            <Alert.Heading className="h6">
                                                <i className="bi bi-calculator me-2"></i>
                                                Vista Previa del Cálculo
                                            </Alert.Heading>
                                            <p className="mb-0">
                                                <strong>Fórmula:</strong> {formatearMoneda(parseFloat(tarifaDiaria) || 0)} × {diasTrabajados} días = 
                                                <span className="fw-bold text-primary ms-2">
                                                    {formatearMoneda((parseFloat(tarifaDiaria) || 0) * diasTrabajados)}
                                                </span>
                                            </p>
                                        </Alert>
                                    </Col>
                                </Row>
                            )}
                            <Row className="mb-4">
                                <Col className="text-center">
                                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                                        <Button variant="warning" onClick={calcularBono} size="lg">
                                            <i className="bi bi-calculator me-2"></i>
                                            Calcular Bono
                                        </Button>
                                        <Button variant="outline-secondary" onClick={limpiarFormulario}>
                                            <i className="bi bi-arrow-clockwise me-2"></i>
                                            Limpiar
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            {resultado && (
                                <Alert variant="warning" className="border-0 shadow-sm">
                                    <Alert.Heading className="h4 text-center">
                                        <i className="bi bi-trophy me-2"></i>
                                        Resultado del Cálculo de Bono
                                    </Alert.Heading>
                                    
                                    <div className="text-center mb-4">
                                        <small className="text-muted">
                                            Fecha: {new Date().toLocaleDateString()} | Tipo: {getTipoBono(resultado.diasTrabajados)}
                                        </small>
                                    </div>

                                    <Row className="text-center">
                                        <Col md={4}>
                                            <div className="p-3 bg-light rounded">
                                                <h6 className="text-warning mb-1">
                                                    <i className="bi bi-currency-dollar me-1"></i>
                                                    Tarifa Diaria
                                                </h6>
                                                <h5 className="mb-0">{formatearMoneda(resultado.tarifaDiaria)}</h5>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="p-3 bg-light rounded">
                                                <h6 className={`text-${getColorDias(resultado.diasTrabajados)} mb-1`}>
                                                    <i className="bi bi-calendar-check me-1"></i>
                                                    Días Trabajados
                                                </h6>
                                                <h5 className="mb-0">{resultado.diasTrabajados} días</h5>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="p-3 bg-warning text-dark rounded">
                                                <h6 className="mb-1">
                                                    <i className="bi bi-gift me-1"></i>
                                                    Total Bono
                                                </h6>
                                                <h4 className="mb-0 fw-bold">
                                                    {formatearMoneda(resultado.totalBono)}
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="mt-4 text-center">
                                        <div className="bg-dark text-white p-3 rounded">
                                            <h6 className="mb-2">
                                                <i className="bi bi-info-circle me-1"></i>
                                                Desglose del Cálculo
                                            </h6>
                                            <p className="mb-0">
                                                {formatearMoneda(resultado.tarifaDiaria)} × {resultado.diasTrabajados} días = 
                                                <span className="fw-bold ms-2">{formatearMoneda(resultado.totalBono)}</span>
                                            </p>
                                        </div>
                                    </div>
                                </Alert>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
