<?php
include 'conexion.php';

if(!empty($_FILES['upload']['name'])){
  $size=$_FILES['upload']['size'];
	$type=$_FILES['upload']['type'];
	$archivo=$_FILES['upload']['tmp_name'];
	$name=$_FILES['upload']['name'];
	if($size<3203507){
		if(move_uploaded_file($archivo, '../archivos/' . $name)){
			$query=$conexion->query("INSERT INTO archivo (nombreArchivo)
									VALUES('$name')");
			if($query){
				echo 1; //all is good
			}else{
				echo 4; // error in database
			}
		}else{
			echo 2; //error in move_uploaded
		}
	}else{
		echo 3; //very big the file
	}
}

 ?>
