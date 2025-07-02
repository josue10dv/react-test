import type { JSX } from "react";
import { Carousel } from "react-bootstrap";

export default function Home(): JSX.Element {
    return (
        <div className="container py-4">
            <div className="row mb-5">
                <div className="col-12">
                    <h1 className="display-4">Bienvenido a Mi App</h1>
                    <p className="lead">Esta es una aplicación de ejemplo utilizando React y Bootstrap.</p>
                </div>
            </div>

            <div className="row mb-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            src="/1.png"
                            alt="Usuario"
                            style={{ width: "100%", height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="/2.avif"
                            alt="Usuario"
                            style={{ width: "100%", height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="/3.png"
                            alt="Usuario"
                            style={{ width: "100%", height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Usuarios</h5>
                            <p className="card-text">Gestiona el listado de usuarios registrados.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Cálculo de Sueldos</h5>
                            <p className="card-text">Calcula el sueldo neto de cada empleado.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Registro Rápido</h5>
                            <p className="card-text">Registra nuevos usuarios fácilmente.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="alert alert-info mb-3">Bienvenido al sistema de usuarios y nómina.</div>
                    <div className="alert alert-warning">Recuerda completar todos los campos antes de calcular.</div>
                </div>
            </div>
        </div>
    );
}
