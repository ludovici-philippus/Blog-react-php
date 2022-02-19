import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Post(){
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [conteudo, setConteudo] = useState("");
    const [imagem, setImagem] = useState("");

    const post_slug = useParams().slug;
    const categoria_slug = useParams().slug_categoria;

    useEffect(() => {
        axios.get("http://10.0.0.103/reactjs/api/get_post_single.php?post="+post_slug+"&categoria="+categoria_slug).
            then(function(res){
                setTitulo(res.data.titulo);
                setDescricao(res.data.descricao);
                setConteudo(res.data.conteudo);
                setImagem(res.data.imagem); 
            });
    }, []);

    return(
        <article style={styles.article}>
            <div style={styles.header}>
                <h2>{titulo}</h2>
                <img style={{maxWidth: '100%'}} src={imagem}/>
                <p>{descricao}</p>
            </div>
            <main style={{marginTop: 10}}>
                <p style={{fontSize: 18}}>{conteudo}</p>
            </main>
        </article>
    );
}

const styles ={
    article:{
        maxWidth: 900,
        margin: 'auto',
        padding: 10,
        marginTop: 20,
        marginBottom: 20
    },
    header:{
        textAlign: 'center'
    }
}

export default Post;
