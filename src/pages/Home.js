import PostSingle from "../components/PostSingle";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Home(props){
    const [posts, setPosts] = useState([]);
    const categoria = useParams().slug;

    useEffect(() => {
        if(props.busca == ""){
            axios.get("http://10.0.0.103/reactjs/api/get_posts.php?posts=true").
                then(res => setPosts(res.data))    
        }else if(props.busca != "" && categoria == undefined){
            axios.get("http://10.0.0.103/reactjs/api/get_posts.php?posts=true&busca="+props.busca).
                then(res => setPosts(res.data))
        }else if(categoria != undefined){
            axios.get("http://10.0.0.103/reactjs/api/get_posts.php?posts=true&categoria="+categoria).
                then(res => setPosts(res.data))
        }
    }, [props.busca, categoria]);

    return(
        <main>
            <section style={styles.posts}>
                <div style={styles.container}>
                    {
                        posts.map(val => {
                            let slug = "/" + val.slug_categoria + "/" + val.slug;
                            return(
                                <PostSingle title={val.titulo} description={val.descricao} image={val.imagem} slug={slug}/>
                            ) 
                        })
                    }
                </div>
            </section>
        </main> 
    );
}

const styles = {
    posts:{
        marginTop: 20,
        marginBottom: 20
    },
    container:{
        maxWidth: 900,
        margin: 'auto',
        paddingHorizontal: '2%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
}

export default Home;
