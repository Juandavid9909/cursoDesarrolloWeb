<?php

declare(strict_types = 1);
include 'includes/header.php';

function usuarioAutenticado(bool $autenticado) : ?string {
    if($autenticado) {
        return "El usuario está autenticado";
    }
    else {
        return null;
    }
}

$usuario = usuarioAutenticado(true);
echo $usuario;

include 'includes/footer.php';