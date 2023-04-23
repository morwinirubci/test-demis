<?php 

$connection = new PDO('mysql:host=mysql.demis;dbname=demis', 'mysql', 'mysql');

$statement  = $connection->prepare(
    'CREATE TABLE feedbacks (
        id int NOT NULL AUTO_INCREMENT primary key,
        name varchar(255) NOT NULL,
        address varchar(255) NOT NULL,
        phone varchar(255) NOT NULL,
        email varchar(255) NOT NULL
    );'
);
$statement->execute();




