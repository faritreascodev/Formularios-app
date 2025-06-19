import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormularioTexto from "./FormularioTexto";
import FormularioFormik from "./FormularioFormik";

// Componente de Inicio
function Inicio() {
  return (
    <section>
      <h1>Bienvenido</h1>
      <p>Selecciona un formulario desde el menú de navegación.</p>
      <p>Esta es una práctica de formularios en React.</p>
      <p>¡Navegue!</p>
    </section>
  );
}

function Navegacion() {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success px-3">
          <Link className="navbar-brand" to="/">PrácticaForm</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/FormularioTexto">Formulario Texto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/FormularioFormik">Formulario Formik</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/FormularioTexto" element={<FormularioTexto />} />
          <Route path="/FormularioFormik" element={<FormularioFormik />} />
          <Route path="*" element={<p className="text-danger">Página no encontrada</p>} />
        </Routes>
      </main>
    </Router>
  );
}

export default Navegacion;
