function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Realizar solicitud POST al servidor
    fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            // Redirige a la página de bienvenida si la autenticación es exitosa
            window.location.href = 'bienvenida.html';
        } else {
            // Muestra un mensaje de error si la autenticación falla
            alert('Error de inicio de sesión. Verifica tu usuario y contraseña.');
        }
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
        alert('Error al intentar iniciar sesión. Por favor, intenta nuevamente.');
    });
}
