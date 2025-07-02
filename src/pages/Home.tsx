import type { JSX } from "react";

export default function Home(): JSX.Element {
    return (
        <div className="container mt-5">
            <h1>Bienvenido a Mi App de Prueba</h1>
            <p>Esta es una aplicación de ejemplo utilizando React y Bootstrap.</p>
            <p>Explora las diferentes secciones para ver cómo funciona.</p>
        </div>
    );
}