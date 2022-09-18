<?php

header("Access-Control-Allow-Origin: *");

function cors() { if (isset($_SERVER['HTTP_ORIGIN'])) { 
    $_SERVER['HTTP_ORIGIN']; 
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}"); 
    header('Access-Control-Allow-Credentials: true'); header('Access-Control-Max-Age: 86400');  } 
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { 
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}"); exit(0); } echo "You have CORS!"; 
}
cors();
$arr = (array) json_decode(file_get_contents('php://input'));

$db = new PDO('mysql:host=localhost;dbname=calculator9000bdd','root','');
$stmt = $db->prepare("INSERT INTO sauvcalcul (Calcul, Resultat) VALUES (:calcul, :resultat)");
$stmt->bindParam(':calcul', $arr["Calc"]);
$stmt->bindParam(':resultat', $arr["Resultat"]);
$stmt->execute();





?>
