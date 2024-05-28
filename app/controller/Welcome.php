<?php

namespace controller;

require_once realpath('./vendor/autoload.php');

use config\View;

class Welcome extends View
{
    public function index()
    {
        return parent::vista('welcome');
    }
}

$controlador = new Welcome();