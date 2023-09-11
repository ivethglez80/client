import React from "react";
import styles from "./home.module.css";
import logoDorado from "../../img/logo-dorado.png"
import sideimg from "../../img/side-img.png"
import Cardsvc from "../../components/cardsvc/cardsvc"

const home = () => {
    return(
        <>
        <div className={styles.background}>
            <div className={styles.bglogo}>
            <img src={logoDorado} alt="dorado" className={styles.logoDorado}/>
            </div>
        </div>

        <div className={styles.intro}>
            <span className={styles.introItems}>
                <h2>Sabemos que el asunto</h2>
                <h2>es dificil</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla </p>
                <button>CONTACTANOS</button>                
            </span>            
            <span>
            <img src={sideimg} alt="sideImg" className={styles.sideimg} />
            </span>
        </div>

        <div className={styles.nosotros}> 
            <span className={styles.sidetitle}>
                <h2 className={styles.sidetitleh2}>Nuestros servicios</h2>
            </span>
            <span className={styles.cardSvc}>
                <Cardsvc/>
            </span>
        </div>

    </>
    )
}

export default home;