import { Link } from "react-router-dom";

function PostSingle(props){
    return(
        <div style={styles.postSingle}>
            <Link style={styles.link} to="/slug">
            <img src={props.image} title={props.title} alt={props.description}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            </Link>
            <Link style={styles.btn} to="/slug">Ler</Link>
        </div>
    );
}

const styles = {
    postSingle:{
        textAlign: 'center',
        width: '33%',
        border: "10px solid #fff"
    },
    link:{
        textDecoration: 'none',
        color: '#333',
    },
    btn:{
        color: 'white',
        backgroundColor: '#DD6031',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        padding: 8,
        paddingLeft: 30,
        paddingRight: 30,
        hoverable: true,
        onhover:{
            backgroundColor: "#BB4419",
        }
    },
    btnHover:{
        backgroundColor: "#BB4419",
    }
}

export default PostSingle;
