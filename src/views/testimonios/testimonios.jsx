import React from "react";
import styles from "./testimonios.module.css"
import CardTst from "../../components/cardTst/cardtst";

const Testimonios = () =>{
    return (
        <div className={styles.background}>
            <div className={styles.heading}>
                <h1>Testimonios de los clientes</h1>
                <h3>Una mirada honesta de nuestro trabajos</h3>
            </div>

            <div className={styles.testimoniosdiv}>
                <CardTst />
            </div>
            
        </div>
    )
}

export default Testimonios;