import {Link} from "react-router-dom";
import styles from "./HeaderContent.module.css";

import {useEffect, useState} from 'react';
import axios from "axios";
function HeaderContent(){
    const [categorias, setCategorias] = useState([]);

    useEffect(() => { 
        axios.get("http://10.0.0.103/reactjs/api/get_categories.php?pega_categorias=true").
            then(res => setCategorias(res.data))
    }, []);
    return(
        <div className={styles.header__content}>
            <form>
                <input type="text" name="busca"/>
                <button id="pesquisar">P</button>

            </form>
            <nav className={styles.header__categorias}>
                <ul>
                    {
                        categorias.map((val) => {
                            return(
                                <li><Link to={val.slug}>{val.nome}</Link></li>
                            )
                        })        
                    }
                </ul>
            </nav>
        </div>
);
}

export default HeaderContent;
