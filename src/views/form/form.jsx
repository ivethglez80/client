import React, { useState } from "react";
import styles from "./form.module.css";
import logogray from "../../img/logo-nf.png"

const ContactForm = () => {

    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        email: "",
        consulta: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }


    return (
        <div className={styles.bgcf}>
        <div>
            <form onSubmit={handleSubmit} className={styles.formStyles}>
                <div className={styles.Campo}>
                    <label className={styles.label}>Nombre: </label> <br />
                    <input type="text" name="nombre" value={state.nombre} onChange={handleInput} className={styles.npt} />
                </div>
                <div className={styles.campo}>
                    <label className={styles.label}>Apellido: </label> <br />
                    <input type="text" name="apellido" value={state.apellido} onChange={handleInput} className={styles.npt} />
                </div>
                <div className={styles.campo}>
                    <label className={styles.label}>Correo electronico: </label> <br />
                    <input type="email" name="email" value={state.email} onChange={handleInput} className={styles.npt} />
                </div>
                <div className={styles.campo}>
                    <label className={styles.label}>Por favor detalle una breve <br /> descripcion de su consulta:</label> <br />
                    <textarea
                        name="consulta"
                        value={state.consulta}
                        onChange={handleInput}
                        className={styles.textarea}                         
                    />
                </div>
                <div className={styles.campo}>
                    <label className={styles.btn}></label>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>

        <div className={styles.imgarea}  >
            <img src={logogray} alt="logo gris" />
        </div>
        </div>
    )
}

export default ContactForm;