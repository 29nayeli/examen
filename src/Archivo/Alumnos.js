import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Alumnos = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [mostrarDatos, setMostrarDatos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el registro del alumno
    console.log({ nombre, edad, email, telefono, direccion });
  };

  const handleMostrarDatos = () => {
    setMostrarDatos(true);
  };

  return (
    <div className="container mt-4">
      <h2>Registro de Alumno</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEdad">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese su edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDireccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>

      {/* Botón para mostrar los datos ingresados */}
      <Button
        variant="info"
        className="mt-3"
        onClick={handleMostrarDatos}
      >
        Mostrar Datos Ingresados
      </Button>

      {/* Mostrar los datos ingresados si el usuario hace clic en el botón */}
      {mostrarDatos && (
        <div className="mt-3">
          <h4>Datos Ingresados:</h4>
          <ul>
            <li><strong>Nombre:</strong> {nombre}</li>
            <li><strong>Edad:</strong> {edad}</li>
            <li><strong>Email:</strong> {email}</li>
            <li><strong>Teléfono:</strong> {telefono}</li>
            <li><strong>Dirección:</strong> {direccion}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Alumnos;
