const users = [{ username: "admin", password: "password" }];

function showMessage(message) {
  document.getElementById("message").textContent = message;
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find((u) => u.username == username && u.password == password);

  if (password.length >= 8 && password.length <= 16) {
    if (user){
      window.location.href = "admin.html";
    } 
    else{
      showMessage("Credenciales incorrectas. Inténtelo de nuevo.");
    }
  } 
  else{
    showMessage("La Contraseña debe tener entre 8 y 16 caracteres  ");
  }
}
