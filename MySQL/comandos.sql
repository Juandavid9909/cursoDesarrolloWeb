-- Mostrar bases de datos y tablas
SHOW DATABASES;
USE nombreBD;
SHOW TABLES;

-- Crear base de datos
CREATE DATABASE appsalon;

-- Crear tablas
CREATE TABLE servicios(
	id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL UNIQUE,
    precio DECIMAL(6, 2) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE citas(
	id INT(11) NOT NULL AUTO_INCREMENT,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    clienteId INT(11) NOT NULL,
    PRIMARY KEY(id),
    KEY clienteId(clienteId),
    CONSTRAINT cliente_FK FOREIGN KEY (clienteId) REFERENCES clientes(id)
);
CREATE TABLE citasServicios(
	id INT(11) AUTO_INCREMENT,
    citaId INT(11) NOT NULL,
    servicioId INT(11) NOT NULL,
    PRIMARY KEY(id),
    KEY citaId(citaId),
    CONSTRAINT citas_FK FOREIGN KEY(citaId) REFERENCES citas(id),
    KEY servicioId(servicioId),
    CONSTRAINT servicios_FK FOREIGN KEY(servicioId) REFERENCES servicios(id)
);

-- Insertar datos
INSERT INTO servicios(nombre, precio) VALUES(
	"Corte de Cabello de Adulto",
    80
); 
INSERT INTO servicios(nombre, precio) VALUES(
	"Corte de Cabello Niño",
    60
);
INSERT INTO servicios(nombre, precio) VALUES
("Peinado Mujer", 80),
("Peinado hombre", 60);

-- Consultar datos
SELECT * FROM servicios;
SELECT nombre, precio FROM servicios ORDER BY precio;
SELECT id, nombre, precio FROM servicios ORDER BY id DESC LIMIT 2;
SELECT * FROM servicios WHERE id = 3;
SELECT * FROM servicios WHERE precio BETWEEN 100 AND 200;
SELECT * FROM reservaciones WHERE id IN(1, 3);

-- Actualizar elementos
UPDATE servicios SET precio = 70, nombre = "Corte de Cabello para Niño ACTUALIZADO" WHERE id = 2;

-- Eliminar elementos
DELETE FROM servicios WHERE id = 1;

-- Modificar tablas
ALTER TABLE servicios ADD descripcion VARCHAR(100) NOT NULL;
ALTER TABLE servicios CHANGE descripcion nuevonombre VARCHAR(11) NOT NULL;
ALTER TABLE servicios DROP COLUMN descripcion;

-- Eliminar tabla
DROP TABLE servicios;

-- Agrupar
SELECT COUNT(id), fecha FROM reservaciones GROUP BY fecha ORDER BY COUNT(id) DESC;

-- Sumar
SELECT SUM(precio) AS totalServicios FROM servicios;

-- Min y Max
SELECT MIN(precio) AS precioMenor FROM servicios;
SELECT MAX(precio) AS precioMenor FROM servicios;

-- Like
SELECT * FROM servicios WHERE nombre LIKE "Corte%";

-- Concat
SELECT CONCAT(nombre, " ", apellido) AS nombreCompleto FROM reservaciones;
SELECT * FROM reservaciones WHERE CONCAT(nombre, " ", apellido) LIKE "%Ana Preciado%";

-- Join
SELECT * FROM citas INNER JOIN clientes ON clientes.id = citas.clienteId;
SELECT * FROM citasServicios
LEFT JOIN citas ON citas.id = citasServicios.citaId
LEFT JOIN clientes ON citas.clienteId = clientes.id
LEFT JOIN servicios ON servicios.id = citasServicios.servicioId;