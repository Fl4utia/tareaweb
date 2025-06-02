document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name && email && password) {
    document.getElementById("message").textContent = "¡Registro exitoso!";
  } else {
    document.getElementById("message").textContent = "Por favor completa todos los campos.";
  }
});
