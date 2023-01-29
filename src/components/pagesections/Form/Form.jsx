import React from 'react';
import { useFormik } from 'formik';

import contact from '../../../images/images/home/contact.jpg'
import styles from './Form.module.scss'
import { ReactComponent as IconWorning } from '../../../images/images/form/worning.svg'

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'This is a required field';
    }


    if (!values.email) {
        errors.email = 'This is a required field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

export const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div className={styles.form} >
            <div>
                <img src={contact} alt="contact" className={styles.form_img} />
            </div>
            <form className={styles.form_container} onSubmit={formik.handleSubmit} name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <h4 className={styles.form_title}>Request Callback</h4 >
                <input className={styles.form_input} type="text" name="name" placeholder={"Enter your name"} id="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name} />

                {formik.touched.name && formik.errors.name ? (
                    <div className={styles.worningMassage}><IconWorning />{formik.errors.name}</div>
                ) : null}

                <input className={styles.form_input} type="email" name="email" placeholder={"Enter email*"} id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? (
                    <div className={styles.worningMassage}><IconWorning styles=" padding: 0px; display: flex" />{formik.errors.email}</div>
                ) : null}

                <button className={styles.form_button} type="submit">Send</button>
            </form>

        </div>

    );
};