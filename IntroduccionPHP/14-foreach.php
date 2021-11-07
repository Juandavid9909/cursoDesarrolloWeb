<?php include 'includes/header.php';

$productos = [
    [
        "nombre" => "Tablet",
        "precio" => 200,
        "disponible" => true
    ],
    [
        "nombre" => "Television 24''",
        "precio" => 300,
        "disponible" => true
    ],
    [
        "nombre" => "Monitor Curvo",
        "precio" => 400,
        "disponible" => false
    ]
];

foreach($productos as $producto) { ?>
    <li>
        <p>Producto: <?= $producto["nombre"]; ?></p>
        <p>Precio: $ <?= $producto["precio"]; ?></p>
        <p><?= $producto["disponible"] ? "Disponible" : "No disponible"; ?></p>
    </li>

    <?php
    echo "<pre>";
    var_dump($producto);
    echo "</pre>";
}

include 'includes/footer.php';