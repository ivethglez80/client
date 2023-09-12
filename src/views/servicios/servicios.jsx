import React from "react";
import upimg from "../../img/up-img.png"
import styles from "./servicios.module.css"

const Servicios = () =>{
return(
    <div>
        <img src={upimg} alt="media pagina arriba"  className={styles.uphalf}/>

        <div className={styles.txts}>
        <span className={styles.sidetitle}>
            <h1>En lo que nos especializamos</h1>
        </span>
        <span className={styles.sidetxt}>
            <p>aqui se muestra los servicios en los que hay expertise:</p>
            <ul>
                <li>aqui se lista uno de los servicios especializados</li>
                <li>aqui se lista uno de los servicios especializados</li>
                <li>aqui se lista uno de los servicios especializados</li>
                <li>aqui se lista uno de los servicios especializados</li>
                <li>aqui se lista uno de los servicios especializados</li>
            </ul>
        </span>
        </div>
    </div>
)
};

export default Servicios;