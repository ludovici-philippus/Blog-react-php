<?php 
header('Access-Control-Allow-Origin: *');
if(isset($_GET['posts'])){
    if($_GET['categoria']){
        die("W.I.P");
    }else{
        $sql = MySql::connect()->prepare("SELECT * FROM `tb_posts`");
        $sql->execute();
        $data = $sql->fetchAll();
        echo json_encode($data);
    }
}else{
    die("Requisição rejeitada");
}

?>
