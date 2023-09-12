import React from "react";
import styles from "./cardtst.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiSolidQuoteRight } from 'react-icons/bi';
import { useMediaQuery } from 'react-responsive';


const testimonios = [
    {
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        name: "Ingrid Correa"
    },
    {
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        name: "Wendy Salinas"
    },
    {
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        name: "Gabriel Shelby"
    }, 
    {
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        name: "John Doe"
    }, {
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        name: "Anna Sanders"
    },
    {
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        name: "Paul Smith"
    }
];

const CardTst = () =>{

    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const settings = {
        infinite: true,
        slidesToShow: isLargeScreen ? 3 : 1, // Mostrar 3 tarjetas en pantallas grandes, 1 en pantallas pequeñas
        slidesToScroll: isLargeScreen ? 3 : 1,
      };


    return (
        <Slider {...settings} className={styles.slider}>
            {testimonios.map(tst => (
                <div className={styles.cardtst}>
                    <BiSolidQuoteRight />
                    <p>{tst.text}</p>
                    <h4>-{tst.name}</h4>
                </div>
            ))}
        </Slider>
    )
}

export default CardTst;