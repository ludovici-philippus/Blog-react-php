import { Link } from "react-router-dom";

function PostSingle(props){
    return(
        <div style={styles.postSingle}>
            <Link style={styles.link} to={props.slug}>
            <img style={{maxWidth: '100%'}} src={props.image} title={props.title} alt={props.description}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            </Link>
            <Link style={styles.btn} to={props.slug}>Ler</Link>
        </div>
    );
}

const styles = {
    postSingle:{
        textAlign: 'center',
        width: '33%',
        border: "10px solid #fff",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
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
