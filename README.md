# Practica Devops

1. crear app node js
2. subir al branch
3. crear un pipeline que compile la aplicación


## Descripcion del proyecto:

- Tener node.js instalado.
- Inicializar proyecto npm init.
- Crear punto de entrada de la aplicación ( en mi caso app.js).
- Instalar dependencias necesarias ( en mi caso instalé express y nodemon).
- Requerir express y hacer llamado al modulo correspondiente.
- Crear servidor, hacer alguna petición para comprobar que el servidor se encuentre funcionando correctamente.
- Crear gitignore e ignorar archivos  que no queremos que se suban al repositorio remoto.
- Realizar un git add de los archivos en la rama espcífica. 
- Hacer los commits correspondientes.

## Crear un pipeline de integración continua (CI):

- .gitlab-ci.yml: define las etapas y trabajos que se ejecutarán en el pipeline  CI/CD. 
- image: node:14: Define la imagen Docker que se usará para todos los trabajos en el pipeline. En este caso, se utiliza una imagen con Node.js versión 14.
- stages: Define las etapas del pipeline. Las etapas se ejecutan en orden secuencial, y los trabajos dentro de la misma etapa se ejecutan en paralelo.
- before_script: Define comandos que se ejecutan antes de todos los trabajos. En este caso, se instala las dependencias del proyecto.
- build y test: Definidos para la etapa de compilación y pruebas. Cada trabajo tiene un script que se ejecuta, que puede incluir comandos para construir y probar tu aplicación.

## Crear Test con jest

#### Instalar jest, supertest, y cross-env como dependencias de desarrollo. 

- npm install --save-dev jest supertest cross-env
- Ejecutar npm test para probar el funcionamiento.