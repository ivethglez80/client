import React from "react";
import styles from "./contacto.module.css"
import logowhite from "../../img/logo-invertido.png"
import {BsFacebook, BsTwitter,BsInstagram} from "react-icons/bs"

const Contacto = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.upper}>
                <img src={logowhite} alt="logo white" />
                <p>POR LA JUSTICIA Y ETC <br /> SLOGAN</p>
            </div>

            <div className={styles.datos}>

                <span className={styles.lefty}>
                    <h3>Datos de contacto</h3>
                    <p>123 cualquier calle <br />
                        cualquier ciudad cp 1234
                        <br /> <br />
                        (123) 456-7890 <br />
                        mail@mail.com</p>
                </span>

                <span className={styles.middly}>
                    <h3>Horario de atencion</h3>
                    <p>
                        Lunes a viernes <br />
                        9:00 am to 6:00 pm
                        <br /> <br />
                        Sabados <br />
                        9:00 am to 12 noon
                        <br /> <br />
                        Domingos cerrado
                    </p>
                </span>

                <span className={styles.righty}>
                    <h3>Nuestras redes</h3>
                    <BsFacebook className={styles.icono}/>
                    <BsTwitter className={styles.icono} />
                    <BsInstagram className={styles.icono} />
                </span>

            </div>
            <div className={styles.bottom}>
                <p>Somos una empresa comprometida con alguna cuestion, etc etc</p>
            </div>
        </div>
    )
}

export default Contacto;