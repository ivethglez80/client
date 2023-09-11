import React from "react";
import styles from "./cardsvc.module.css"

const Cardsvc = () => {
    return (
        <div>
            <span className={styles.contenedor}>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <p className={styles.title}>Servicio 1</p>
                            <p>Catch phrase 1</p>
                        </div>
                        <div className={styles.flipCardBack}>
                            <p className={styles.title}>subtitulo 1</p>
                            <p>Descripcion del servicio lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <p className={styles.title}>Servicio 2</p>
                            <p>Catch phrase 1</p>
                        </div>
                        <div className={styles.flipCardBack}>
                            <p className={styles.title}>subtitulo 2</p>
                            <p>Descripcion del servicio lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <p className={styles.title}>Servicio 3</p>
                            <p>Catch phrase 1</p>
                        </div>
                        <div className={styles.flipCardBack}>
                            <p className={styles.title}>subtitulo 3</p>
                            <p>Descripcion del servicio lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <p className={styles.title}>Servicio 4</p>
                            <p>Catch phrase 1</p>
                        </div>
                        <div className={styles.flipCardBack}>
                            <p className={styles.title}>subtitulo 4</p>
                            <p>Descripcion del servicio lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </span>

        </div>
    )

}

export default Cardsvc;