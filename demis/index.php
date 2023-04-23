<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $connection = new PDO('mysql:host=mysql.demis;dbname=demis', 'mysql', 'mysql');

    $statement  = $connection->prepare(
        "select * from feedbacks;"
    );
    $statement->execute();
    
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
}





