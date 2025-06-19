import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormularioFormik(props) {
    const [persona, setPersona] = React.useState([
        { cedula: '0123456789', apellidos: 'Reasco', nombres: 'Farit', fechaNacimiento: '2007-04-30' },
        { cedula: '0223456789', apellidos: 'Torres', nombres: 'Alexander', fechaNacimiento: '2007-04-30' },
        { cedula: '0323456789', apellidos: 'Dussel', nombres: 'Enrique', fechaNacimiento: '1934-12-24' },
        { cedula: '0443456789', apellidos: 'Haya de la Torre', nombres: 'Raúl', fechaNacimiento: '1895-02-22' },
    ]);

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
        setPersona((prev) => [...prev, values]);
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={InitialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {
                () => (
                    <Form className='container p-4'>
                        <div className='mb-3'>
                            <label className='form-label'>Cédula de identidad</label>
                            <Field
                                name='cedula'
                                className='form-control'
                            />
                            <ErrorMessage name='cedula' component={'div'} className='text-danger' />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Apellidos:</label>
                            <Field
                                name='apellidos'
                                className='form-control'
                            />
                            <ErrorMessage name='apellidos' component={'div'} className='text-danger' />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Nombres:</label>
                            <Field
                                name='nombres'
                                className='form-control'
                            />
                            <ErrorMessage name='nombres' component={'div'} className='text-danger' />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Fecga de nacimiento:</label>
                            <Field
                                name='fechaNacimiento'
                                className='form-control'
                                type='date'
                                max={hoy}
                            />
                            <ErrorMessage name='fechaNacimiento' component={'div'} className='text-danger' />
                        </div>

                        <button type='submit' className='btn btn-success'>Enviar</button>

                        <div className='mt-4'>
                            <h4 className='mb-3'>Personas registradas</h4>
                            <div className='table-responsive'>
                                <table className='table table-hover table-bordered align-middle'>
                                    <thead className='table-success'>
                                        <tr>
                                            <th>Cédula</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Fecha de Nacimiento</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            persona.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.cedula}</td>
                                                    <td>{item.nombres}</td>
                                                    <td>{item.apellidos}</td>
                                                    <td>{item.fechaNacimiento}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Form>
                )
            }
        </Formik>
    );
}

export default FormularioFormik;