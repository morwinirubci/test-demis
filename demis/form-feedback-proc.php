<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");

$json = file_get_contents('php://input');

$data = json_decode($json, true);
if (!isset($data["name"]) || !isset($data["address"]) || !isset($data["phone"]) || !isset($data["email"])) {
    echo json_encode([
        'error' => 'Fields empty'
    ]);
    die();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $connection = new PDO('mysql:host=mysql.demis;dbname=demis', 'mysql', 'mysql');

    $statement  = $connection->prepare(
        "insert into feedbacks (name, address, phone, email) values (?,?,?,?);"
    );


    $statement->execute([$data['name'], $data['address'], $data['phone'], $data['email']]);



    var_dump($data);
}
