<?php
header('Access-Control-Allow-Origin: *');
if(isset($_GET['pega_categorias'])){
    require("./config.php");
    $sql = MySql::connect()->prepare("SELECT * FROM `tb_categorias`");
    $sql->execute();
    $data = $sql->fetchAll();
    die(json_encode($data));

}else
    die("Requisição rejeitada!");
?>
