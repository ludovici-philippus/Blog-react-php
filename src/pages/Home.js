import PostSingle from "../components/PostSingle";
import {useState, useEffect} from "react";
import axios from "axios";

function Home(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get();
    });

    return(
        <main>
            <section style={styles.posts}>
                <div style={styles.container}>
                    <PostSingle title="Teste" description="testando" image="https://picsum.photos/300"/>
                    <PostSingle title="Teste" description="testando" image="https://picsum.photos/300"/>
                    <PostSingle title="Teste" description="testando" image="https://picsum.photos/300"/>
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
