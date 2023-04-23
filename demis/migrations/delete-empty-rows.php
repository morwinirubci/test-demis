<?php 

$connection = new PDO('mysql:host=mysql.demis;dbname=demis', 'mysql', 'mysql');

$statement  = $connection->prepare(
   'delete from feedbacks'
);
$statement->execute();




