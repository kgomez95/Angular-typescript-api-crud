# Angular-typescript-api-crud
Pequeña aplicación de Angular con autenticación, CRUD de departamentos y CRUD de empleados, utilizando el siguiente proyecto backend: https://github.com/kgomez95/Nodejs-typescript-api-crud
<br />

# 0.- Pasos para hacer funcionar el proyecto
<p>Para hacer funcionar este proyecto una vez descargado o clonado tienes que abrir una línea de comandos en la carpeta del proyecto (en mi caso dentro de la carpeta "app") y ejecutar el siguiente comando:</p>
<ul>
    <li><b><i>npm install</i></b></li>
</ul>
<p>* Este comando instalará las dependencias necesarias para ejecutar la aplicación (creará la carpeta "node_modules").</p>
<p>Estas son las urls diponibles para probar actualmente:</p>
<ul>
    <li>http://localhost:4200/auth/login</li>
    <li>http://localhost:4200/departments</li>
</ul>
<br />

# 1.- Instalación del proyecto base
<p>A continuación se detallan los pasos a seguir para instalar la base del proyecto Angular:</p>
<ul>
    <li>Instalar el cliente Angular <b><i>npm install -g @angular/cli</i></b>.</li>
    <li>Crear el proyecto (donde pone "[NOMBRE_PROYECTO]" es el nombre que tendrá tu aplicación) <b><i>ng new [NOMBRE_PROYECTO]</i></b> (en mi caso he ejecutado esto "ng new app").</li>
    <li>
        <p>El comando del punto anterior nos hará un par de preguntas acerca de nuestro nuevo proyecto:</p>
        <ul>
            <li>La primera pregunta es para indicarle al instalador si queremos que el proyecto venga con "Angular routing" o no. En mi caso le he dicho que sí, porque como vamos a tener varias páginas lo mejor es empezar con una plantilla de prueba (en mi caso particular).</li>
            <li>La segunda pregunta es para indicarle el tipo de formato para los estilos (CSS, SCSSS, Sass o Less) (en mi caso he seleccionado SCSS).</li>
        </ul>
    </li>
    <li>Una vez creado el proyecto entramos en su carpeta (en mi caso entro en mi carpeta llamada "app") e instalo bootstrap para Angular <b><i>ng add @ng-bootstrap/ng-bootstrap</i></b>.</li>
    <li>Para comprobar que todo funcione, en mi caso he añadido un botón de prueba con una clase de bootstrap ("btn btn-dark", por ejemplo) en el fichero "app.component.html" y seguidamente he ejecutado la aplicación con el comando <b><i>ng serve</i></b> para comprobar que funcione correctamente.</li>
</ul>
<br />