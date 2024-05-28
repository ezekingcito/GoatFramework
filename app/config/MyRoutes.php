<?php

namespace Config;

use config\Config;

require_once realpath('./vendor/autoload.php');
$router = new Config;
$router->get("/", ['Welcome', 'index']);
$router->get("/welcome", ['Welcome', 'index']);

$router->run();


?>