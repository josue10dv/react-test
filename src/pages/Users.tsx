import {
    useEffect,
    useState,
    type JSX
} from "react";
import axios from "axios";
import {
    Container,
    Card,
    Row,
    Col,
    Table,
    InputGroup,
    Form,
    Button,
    Alert,
    Spinner
} from "react-bootstrap";

interface User {
    id: number;
    username: string;
    email?: string;
}

export default function Users(): JSX.Element {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://nestjs-blob-backend-api.desarrollo-software.xyz/users?page=1&limit=10&isActive=true")
            .then((res) => {
                setUsers(res.data.data.items);
                setFilteredUsers(res.data.data.items);
            })
            .catch(() => {
                setUsers([]);
                setFilteredUsers([]);
            })
            .finally(() => setLoading(false));
    }, []);

    // Filtrado en tiempo real cuando cambia el término de búsqueda
    useEffect(() => {
        if (searchTerm === "") {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter(user => 
                user.username.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    }, [searchTerm, users]);

    const handleFilter = () => {
        if (searchTerm === "") {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter(user => 
                user.username.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    };

    const clearFilter = () => {
        setSearchTerm("");
        setFilteredUsers(users);
    };
    return (
        <Container className="py-4">
            <Row>
                <Col>
                    <Card className="shadow-sm">
                        <Card.Header className="bg-primary text-white">
                            <h3 className="mb-0">
                                <i className="bi bi-people-fill me-2"></i>
                                Listado de Usuarios
                            </h3>
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <i className="bi bi-filter"></i>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            placeholder="Filtrar por nombre de usuario"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <Button variant="success" onClick={handleFilter}>
                                            Filtrar
                                        </Button>
                                        <Button variant="outline-secondary" onClick={clearFilter}>
                                            Limpiar
                                        </Button>
                                    </InputGroup>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex justify-content-end align-items-center h-100">
                                        <span className="badge bg-info fs-6">
                                            Total: {filteredUsers.length} usuarios
                                        </span>
                                    </div>
                                </Col>
                            </Row>

                            {loading ? (
                                <div className="text-center py-5">
                                    <Spinner animation="border" variant="primary" />
                                    <p className="mt-2">Cargando usuarios...</p>
                                </div>
                            ) : (
                                <div className="table-responsive">
                                    <Table striped hover bordered>
                                        <thead className="table-dark">
                                            <tr>
                                                <th scope="col">
                                                    <i className="bi bi-hash me-1"></i>
                                                    ID
                                                </th>
                                                <th scope="col">
                                                    <i className="bi bi-person me-1"></i>
                                                    Nombre de Usuario
                                                </th>
                                                <th scope="col">
                                                    <i className="bi bi-envelope me-1"></i>
                                                    Email
                                                </th>
                                                <th scope="col">
                                                    <i className="bi bi-gear me-1"></i>
                                                    Acciones
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredUsers.length > 0 ? (
                                                filteredUsers.map((user: User) => (
                                                    <tr key={user.id}>
                                                        <td>
                                                            <span className="badge bg-secondary">{user.id}</span>
                                                        </td>
                                                        <td>
                                                            <strong>{user.username}</strong>
                                                        </td>
                                                        <td>
                                                            {user.email ? (
                                                                <a href={`mailto:${user.email}`} className="text-decoration-none">
                                                                    {user.email}
                                                                </a>
                                                            ) : (
                                                                <span className="text-muted fst-italic">No disponible</span>
                                                            )}
                                                        </td>
                                                        <td>
                                                            <Button variant="outline-primary" size="sm" className="me-2">
                                                                <i className="bi bi-eye"></i>
                                                            </Button>
                                                            <Button variant="outline-warning" size="sm" className="me-2">
                                                                <i className="bi bi-pencil"></i>
                                                            </Button>
                                                            <Button variant="outline-danger" size="sm">
                                                                <i className="bi bi-trash"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={4} className="text-center py-4">
                                                        <Alert variant="info" className="mb-0">
                                                            <i className="bi bi-info-circle me-2"></i>
                                                            No se encontraron usuarios que coincidan con los criterios de búsqueda
                                                        </Alert>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </div>
                            )}
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <small>
                                <i className="bi bi-clock me-1"></i>
                                Última actualización: {new Date().toLocaleString()}
                            </small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}