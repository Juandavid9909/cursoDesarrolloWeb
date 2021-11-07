<?php include 'includes/header.php';

$autenticado = true;
$admin = false;

if($autenticado || $admin) {
    echo "Usuario autenticado correctamente";
}
else {
    echo "Usuario no autenticado, inicia sesión";
}

// If anidados
$cliente = [
    "nombre" => "Juan",
    "saldo" => 200,
    "informacion" => [
        "tipo" => "Premium"
    ]
];

if(!empty($cliente)) {
    echo "El arreglo de cliente no está vacío";

    if($cliente["saldo"] > 0) {
        echo "El saldo del cliente está disponible";
    }
    else {
        echo "No hay saldo";
    }
}

// else if
if($cliente["saldo"] > 0) {
    echo "El cliente tiene saldo";
}
else if($cliente["informacion"]["tipo"] === "Premium") {
    echo "El cliente es premium";
}
else {
    echo "No hay cliente definido o no tiene saldo o no es premium";
}

// Switch
echo "<br>";
$tecnologia = "JavaScript";

switch($tecnologia) {
    case "PHP":
        echo "PHP, un excelente lenguaje!";
        break;

    case "JavaScript":
        echo "Genial, el lenguaje de la web";
        break;

    default:
        echo "Algún lenguaje que no sé cuál es";
        break;
}

include 'includes/footer.php';