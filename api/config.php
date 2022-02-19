<?php
    session_start();
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    date_default_timezone_set("America/Sao_Paulo");
    $autoload = function($class){
        $class = str_replace("\\", DIRECTORY_SEPARATOR, $class);
        include("./classes/$class.php");
    };

    spl_autoload_register($autoload);

    define("INCLUDE_PATH", "http://localhost/loja-virtual-teste/");
    define("INCLUDE_PATH_PUBLIC", INCLUDE_PATH."private_space/views/pages/");
    define("INCLUDE_PATH_PAINEL", INCLUDE_PATH."admin/");
    define("INCLUDE_PATH_PAINEL_PUBLIC", INCLUDE_PATH."admin/private_space/views/pages/");
    define("DATA", array("host"=>"localhost","dbname"=>"blog_react","user"=>"root","pass"=>""));

    define("IN_PRODUCTION", false);
?>
