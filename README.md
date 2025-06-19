# 📝 Práctica de Formularios en React

Este proyecto es una aplicación en React que demuestra el uso de formularios con validación. Se presentan dos enfoques distintos:

1. **Formulario con validación manual usando `useState`**
2. **Formulario utilizando Formik y Yup para validación estructurada**

Incluye navegación con `react-router-dom` y diseño con Bootstrap.

---

## 📂 Estructura del proyecto

```plaintext
src/
├── components/
│   ├── FormularioTexto.js
│   ├── FormularioFormik.js
│   └── Navegacion.js
└── index.js
```
---

## 🚀 Instrucciones para Ejecutar

1. Clona el repositorio:
   ```bash
   git clone <https://github.com/faritreascodev/Formularios-app.git>
   cd <Formularios-app>

2. Instala las dependencias:
npm install
npm start

Accede desde el navegador: http://localhost:3000

# Componentes
* FormularioTexto.js
Formulario simple que incluye los siguientes campos:
Nombre
Email

Validación:

Manual mediante useState.
El campo email es validado usando una expresión regular.

* FormularioFormik.js
Formulario más completo con los siguientes campos:

Cédula: exactamente 10 dígitos.
Apellidos: solo letras y espacios, máximo 50 caracteres.
Nombres: solo letras y espacios, máximo 50 caracteres.
Fecha de nacimiento: entre 1900 y la fecha actual.

Validación:
Implementada con Formik y Yup.
Al enviar, los datos se registran en una tabla dinámica.

* Navegacion.js
Sistema de rutas y navegación:
Página de inicio
FormularioTexto - Formulario simple
FormularioFormik - Formulario con Formik
Rutas no válidas redirigen a una página de error.

# Tecnologías
Ambiente React, react router dom, formik, yup, bootstrap.