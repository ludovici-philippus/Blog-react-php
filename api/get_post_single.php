<?php
header('Access-Control-Allow-Origin: *');
if(isset($_GET['post'])){
    require("./config.php");
    $post_slug = $_GET['post'];
    $categoria_slug = $_GET['categoria'];

    $sql = MySql::connect()->prepare("SELECT * FROM `tb_posts` WHERE slug_categoria = ? AND slug = ?");
    $sql->execute(array($categoria_slug, $post_slug));
    $data = $sql->fetch();
    die(json_encode($data));
}else
    die("Requisição rejeitada");
?>
