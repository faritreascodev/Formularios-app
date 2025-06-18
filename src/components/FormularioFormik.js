import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormularioFormik(props) {
    const hoy = new Date().toISOString().split('T')[0];
    const schema = Yup.object().shape({
        cedula: Yup.string()
            .required('La cédula es obligatoria')
            .matches(/^[0-9]{10}$/, 'La cédula debe tener 10 dígitos numéricos'),
        apellidos: Yup.string()
            .required('Los apellidos son obligatorios')
            .matches(/^[a-zA-Z\s]+$/, 'Los apellidos solo pueden contener letras y espacios')
            .max(50, 'Los apellidos no pueden exceder los 50 caracteres'),
        nombres: Yup.string()
            .required('Los nombres son obligatorios')
            .matches(/^[a-zA-Z\s]+$/, 'Los nombres solo pueden contener letras y espacios')
            .max(50, 'Los nombres no pueden exceder los 50 caracteres'),
        fechaNacimiento: Yup.date()
            .required('La fecha de nacimiento es obligatoria')
            .max(new Date(), 'La fecha de nacimiento no puede ser futura')
            .min(new Date('1900-01-01'), 'La fecha de nacimiento debe ser posterior a 1900'),
    });
    
    const InitialValues = {
        cedula: '',
        apellidos: '',
        nombres: '',
        fechaNacimiento: ''
    };

    const handleSubmit = (values, actions) => {
        console.log("datos ingresados", values);
        actions.resetForm();
    }

    return (
        <div>
            
        </div>
    );
}

export default FormularioFormik;