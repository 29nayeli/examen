import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Crud = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  const agregarUsuario = () => {
    const nuevoUsuario = { nombre, edad };
    setUsuarios([...usuarios, nuevoUsuario]);
    setNombre('');
    setEdad('');
  };

  const eliminarUsuario = (index) => {
    const nuevosUsuarios = usuarios.filter((_, i) => i !== index);
    setUsuarios(nuevosUsuarios);
  };

  const editarUsuario = (index) => {
    setNombre(usuarios[index].nombre);
    setEdad(usuarios[index].edad);
    eliminarUsuario(index);
  };

  return (
    <div className="container mt-4">
      <h2>Usuarios Registrados</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <Button onClick={agregarUsuario}>Agregar Usuario</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nombre}</td>
              <td>{usuario.edad}</td>
              <td>
                <Button onClick={() => editarUsuario(index)} variant="warning">
                  Editar
                </Button>
                <Button
                  onClick={() => eliminarUsuario(index)}
                  variant="danger"
                  className="ml-2"
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Crud;
