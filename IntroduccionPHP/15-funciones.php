<?php

declare(strict_types = 1);
include 'includes/header.php';

function sumar(int $numero1 = 0, int $numero2 = 0) { // bool, float, array
    echo $numero1;
    echo $numero1 + $numero2;
}

sumar(numero2: 10, numero1: 20);

function iniciarApp() {
    echo "Iniciando app...";
}

include 'includes/footer.php';