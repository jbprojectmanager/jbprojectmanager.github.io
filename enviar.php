<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];
  
  // Configuración del correo electrónico
  $destinatario = "jb.project.manager.bqto@gmail.com";
  $asunto = "Nuevo mensaje de contacto";
  $contenido = "Nombre: $nombre\n";
  $contenido .= "Correo electrónico: $email\n";
  $contenido .= "Mensaje:\n$mensaje";
  
  // Envío del correo electrónico
  $headers = "From: $email";
  if (mail($destinatario, $asunto, $contenido, $headers)) {
    echo "El correo ha sido enviado correctamente.";
  } else {
    echo "Hubo un error al enviar el correo.";
  }
}
?>
