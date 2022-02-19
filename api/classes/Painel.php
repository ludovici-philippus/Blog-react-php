<?php 
    class Painel{
        public static function alert_js($msg){
            echo "<script>alert('$msg');</script>";
        }

        public static function redirect($url){
            echo "<script>location.href = '$url';</script>";
        }

        public static function nao_vazio($arr){
            foreach ($arr as $key => $value) {
                if($value == "")
                    return false;
            }
            return true;
        }

        public static function validar_nome_usuario($str){
            $str = mb_strtolower($str);
            $str = strip_tags($str);
            $str = preg_replace('/(â|á|ã)/', 'a', $str);
			$str = preg_replace('/(ê|é)/', 'e', $str);
			$str = preg_replace('/(í|Í)/', 'i', $str);
			$str = preg_replace('/(ú)/', 'u', $str);
			$str = preg_replace('/(ó|ô|õ|Ô)/', 'o',$str);
			$str = preg_replace('/(\/|!|\?|#)/', '',$str);
			$str = preg_replace('/( )/', '_',$str);
			$str = preg_replace('/ç/','c',$str);
			$str = preg_replace('/(-[-]{1,})/','-',$str);
			$str = preg_replace('/(,)/','.',$str);
            $str = filter_var($str, FILTER_SANITIZE_SPECIAL_CHARS);
            return $str;
        }

        public static function generate_slug($str){
			$str = mb_strtolower($str);
			$str = preg_replace('/(â|á|ã)/', 'a', $str);
			$str = preg_replace('/(ê|é)/', 'e', $str);
			$str = preg_replace('/(í|Í)/', 'i', $str);
			$str = preg_replace('/(ú)/', 'u', $str);
			$str = preg_replace('/(ó|ô|õ|Ô)/', 'o',$str);
			$str = preg_replace('/(_|\/|!|\?|#)/', '',$str);
			$str = preg_replace('/( )/', '-',$str);
			$str = preg_replace('/ç/','c',$str);
			$str = preg_replace('/(-[-]{1,})/','-',$str);
			$str = preg_replace('/(,)/','-',$str);
			$str=strtolower($str);
			return $str;
		}
    }
?>
