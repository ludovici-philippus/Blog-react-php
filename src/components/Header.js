import { Link } from "react-router-dom";
import styles from "./Header.module.css";

import HeaderContent from "./HeaderContent";

function Header(props){
    return(
        <header>
            <div className={styles.overlay}></div>
            <div className={styles.header__logo}>
                <Link to="/">Blog</Link> 
            </div>
            <HeaderContent setBusca={props.setBusca}/>
        </header>
    );
}

export default Header;
