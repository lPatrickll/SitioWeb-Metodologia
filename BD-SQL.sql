CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (nombre, contrasena) VALUES
('user1', '123'),
('user2', '456'),
('user3', '789');

SELECT * FROM usuarios;