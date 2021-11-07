<?php include 'includes/header.php';

$cliente = [
    "nombre" => "Juan",
    "saldo" => 200,
    "informacion" => [
        "tipo" => "premium",
        "disponible" => 100
    ]
];

echo "<pre>";
var_dump($cliente);
echo "</pre>";

// echo $cliente["nombre"];
// echo $cliente["saldo"];
// echo $cliente["informacion"]["disponible"];

$cliente["codigo"] = 1209192012;

echo "<pre>";
var_dump($cliente);
echo "</pre>";

include 'includes/footer.php';