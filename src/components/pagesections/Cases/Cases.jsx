import React from "react"
import { useState } from 'react';

import cases1 from "../../../images/images/cases/cases1.jpg"
import cases2 from "../../../images/images/cases/cases2.jpg"
import cases3 from "../../../images/images/cases/cases3.jpg"
import cases4 from "../../../images/images/cases/cases4.jpg"
import cases5 from "../../../images/images/cases/cases5.jpg"
import cases6 from "../../../images/images/cases/cases6.jpg"

import styles from "./Cases.module.scss"
import FsLightbox from "fslightbox-react";




export const Cases = () => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });


    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }


    return (
        <div id="cases" className={styles.cases}>
            <div className={styles.cases_textcontainer}>
                <p className={styles.cases_paragraph}>This is what we do</p>
                <h2 className={styles.cases_title}>Business Cases</h2>
                <p className={styles.cases_paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            </div>
            <div className={styles.cases_imgcontainer} >
                <img src={cases1} alt="cases1" className={styles.cases_imgcontainer_item} onClick={() => openLightboxOnSlide(1)} />
                <img src={cases2} alt="cases2" className={styles.cases_imgcontainer_item} onClick={() => openLightboxOnSlide(2)} />
                <img src={cases3} alt="cases3" className={styles.cases_imgcontainer_item} onClick={() => openLightboxOnSlide(3)} />
                <img src={cases4} alt="cases4" className={styles.cases_imgcontainer_item} onClick={() => openLightboxOnSlide(4)} />
                <img src={cases5} alt="cases5" className={styles.cases_imgcontainer_item} onClick={() => openLightboxOnSlide(5)} />
                <img src={cases6} alt="cases6" className={styles.cases_imgcontainer_item} onClick={() => openLightboxOnSlide(6)} />
            </div>

            <FsLightbox
                toggler={lightboxController.toggler}
                sources={[
                    <img src={cases1} alt="cases1" />,
                    <img src={cases2} alt="cases2" />,
                    <img src={cases3} alt="cases3" />,
                    <img src={cases4} alt="cases4" />,
                    <img src={cases5} alt="cases5" />,
                    <img src={cases6} alt="cases6" />
                ]}
                slide={lightboxController.slide}
            />




        </div >

    );
};
