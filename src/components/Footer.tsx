import type { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p className="mb-0">© 2025 - Mi App de Prueba - Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}