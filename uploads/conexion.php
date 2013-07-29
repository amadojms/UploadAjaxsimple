<?php 
$conexion=new mysqli("127.0.0.1", "root", "password", "ajax"); // password of database
if(!$conexion){
  echo "No pudo conectarse al motor de bases de datos: " . mysqli_error();
    exit();
}
 ?>
