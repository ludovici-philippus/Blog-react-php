import PostSingle from "../components/PostSingle";
import {useState, useEffect} from "react";
import axios from "axios";

function Home(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("http://10.0.0.103/reactjs/api/get_posts.php?posts=true").
            then(res => setPosts(res.data))
    });

    return(
        <main>
            <section style={styles.posts}>
                <div style={styles.container}>
                    {
                        posts.map(val => {
                            return(
                                <PostSingle title={val.titulo} description={val.descricao} image={val.imagem} slug={val.slug}/>
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
