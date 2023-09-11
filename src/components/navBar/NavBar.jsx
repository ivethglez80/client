import {Link} from "react-router-dom";
import styles from "./navBar.module.css"

const NavBar=()=>{
    return (
        <div className={styles.bar}>
            <span className={styles.logoMain}>
                <p className={styles.imgnav}>imagen</p>
            </span>
            <span className="styles.links">
            {/* <Link to="/intro">Introduccion </Link>
            <Link to="/nosotros">Por que elegirnos?</Link>
            <Link to="/servicios">Especialidades </Link>
            <Link to="/testimonios">Testimonios</Link>
            <Link to="/contacto">Datos de contacto</Link> */}
            <Link to="/form">Contactanos </Link>     
            </span>       
        </div>
    )
}

export default NavBar;