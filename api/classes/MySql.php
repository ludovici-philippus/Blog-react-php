<?php 
    class MySql{
        private static $pdo;
        public static function connect(){
            try{
                self::$pdo = new PDO("mysql:host=".DATA['host'].";dbname=".DATA['dbname'], DATA['user'], DATA['pass'], array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
                if(IN_PRODUCTION == false)
                    self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }catch(Throwable $th){
                echo "ERRO ao conectar!";
            }
            return self::$pdo;
        }
    }
?>