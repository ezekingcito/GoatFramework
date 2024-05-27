<?php

namespace controller;

require_once realpath('./vendor/autoload.php');

use config\View;

class Test extends View
{
    public function index()
    {
        echo "HolaMundo";
    }
}

$controlador = new Test();