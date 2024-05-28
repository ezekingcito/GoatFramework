<?php

namespace controller;

require_once realpath('./vendor/autoload.php');

use config\View;

class Error extends View
{
    public function index()
    {
        return parent::vista('error');
    }
}

$controlador = new Error();