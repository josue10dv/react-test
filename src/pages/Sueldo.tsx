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

interface SalaryCalculation {
    salarioBase: number;
    primas: number;
    deducciones: number;
    salarioNeto: number;
}

export default function Sueldo(): JSX.Element {
    const [salarioBase, setSalarioBase] = useState<string>("");
    const [primas, setPrimas] = useState<string>("");
    const [deducciones, setDeducciones] = useState<string>("");
    const [resultado, setResultado] = useState<SalaryCalculation | null>(null);

    const calcularSueldo = () => {
        if (!salarioBase || parseFloat(salarioBase) <= 0) {
            alert("Por favor, ingrese un salario base válido");
            return;
        }

        const base = parseFloat(salarioBase) || 0;
        const primasTotal = parseFloat(primas) || 0;
        const deduccionesTotal = parseFloat(deducciones) || 0;
        const salarioNeto = base + primasTotal - deduccionesTotal;

        setResultado({
            salarioBase: base,
            primas: primasTotal,
            deducciones: deduccionesTotal,
            salarioNeto
        });
    };

    const limpiarFormulario = () => {
        setSalarioBase("");
        setPrimas("");
        setDeducciones("");
        setResultado(null);
    };

    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Card className="shadow-lg border-0">
                        <Card.Header className="bg-success text-white">
                            <h2 className="mb-0 text-center">
                                <i className="bi bi-calculator me-2"></i>
                                Calculadora de Sueldos
                            </h2>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <Row className="mb-4">
                                <Col md={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold text-primary">
                                            <i className="bi bi-cash-stack me-1"></i>
                                            Salario Base *
                                        </Form.Label>
                                        <InputGroup size="lg">
                                            <InputGroup.Text>$</InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                placeholder="0"
                                                value={salarioBase}
                                                onChange={(e) => setSalarioBase(e.target.value)}
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold text-success">
                                            <i className="bi bi-plus-circle me-1"></i>
                                            Total Primas
                                        </Form.Label>
                                        <InputGroup size="lg">
                                            <InputGroup.Text>$</InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                placeholder="0"
                                                value={primas}
                                                onChange={(e) => setPrimas(e.target.value)}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold text-danger">
                                            <i className="bi bi-dash-circle me-1"></i>
                                            Total Deducciones
                                        </Form.Label>
                                        <InputGroup size="lg">
                                            <InputGroup.Text>$</InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                placeholder="0"
                                                value={deducciones}
                                                onChange={(e) => setDeducciones(e.target.value)}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col className="text-center">
                                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                                        <Button variant="success" onClick={calcularSueldo} size="lg">
                                            <i className="bi bi-calculator me-2"></i>
                                            Calcular Sueldo
                                        </Button>
                                        <Button variant="outline-secondary" onClick={limpiarFormulario}>
                                            <i className="bi bi-arrow-clockwise me-2"></i>
                                            Limpiar
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            {resultado && (
                                <Alert variant="success" className="border-0 shadow-sm">
                                    <Alert.Heading className="h4 text-center">
                                        <i className="bi bi-check-circle me-2"></i>
                                        Resultado del Cálculo
                                    </Alert.Heading>

                                    <Row className="text-center">
                                        <Col md={3}>
                                            <div className="p-3 bg-light rounded">
                                                <h6 className="text-primary mb-1">Salario Base</h6>
                                                <h5 className="mb-0">{resultado.salarioBase}</h5>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className="p-3 bg-light rounded">
                                                <h6 className="text-success mb-1">Total Primas</h6>
                                                <h5 className="mb-0 text-success">
                                                    +{resultado.primas}
                                                </h5>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className="p-3 bg-light rounded">
                                                <h6 className="text-danger mb-1">Total Deducciones</h6>
                                                <h5 className="mb-0 text-danger">
                                                    -{resultado.deducciones}
                                                </h5>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className="p-3 bg-primary text-white rounded">
                                                <h6 className="mb-1">Salario Neto</h6>
                                                <h4 className="mb-0 fw-bold">
                                                    {resultado.salarioNeto}
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="mt-3 text-center">
                                        <small className="text-muted">
                                            <strong>Fórmula:</strong> Salario Neto = Salario Base + Primas - Deducciones
                                        </small>
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
