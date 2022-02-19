<?php 
header('Access-Control-Allow-Origin: *');
if(isset($_GET['posts'])){
    require("./config.php");
    if(isset($_GET['categoria'])){
        die("WIP");
    }else if(isset($_GET['busca'])){
        $busca = $_GET['busca'];
        $sql = MySql::connect()->prepare("SELECT * FROM `tb_posts` WHERE titulo LIKE '%$busca%' OR descricao LIKE '%$busca%' OR conteudo LIKE '%$busca%' ORDER BY id DESC");
        $sql->execute();
        $data = $sql->fetchAll();
        die(json_encode($data));
    }else{
        $sql = MySql::connect()->prepare("SELECT * FROM `tb_posts` ORDER BY id DESC");
        $sql->execute();
        $data = $sql->fetchAll();
        die(json_encode($data));
    }
}else{
    die("Requisição rejeitada");
}

?>
