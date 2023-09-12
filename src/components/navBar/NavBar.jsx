import {Link} from "react-router-dom";
import styles from "./navBar.module.css"
import generico from "../../img/logo-generico.png"

const NavBar=()=>{
    return (
        <div className={styles.bar}>
            <span>
                <img src={generico} alt="generico" className={styles.logoMain}/>
            </span>
            <span className="styles.links">
            {/* <Link to="/intro">Introduccion </Link>
            <Link to="/nosotros">Por que elegirnos?</Link>
            <Link to="/servicios">Especialidades </Link>
            <Link to="/testimonios">Testimonios</Link>
            <Link to="/contacto">Datos de contacto</Link> */}
            <button>Contactanos</button>     
            </span>       
        </div>
    )
}

export default NavBar;