# Tienda de Barras Designs. Muestra tu Personalidad

![Screenshot from 2022-07-17 10-23-56](https://user-images.githubusercontent.com/78239697/179407146-701771f0-fb4a-4c81-901b-d8935e02ec2c.png)

Se está desarrollando la BD en mongodb para los productos, la idea es que se consulté constantemente los cambios que se vayan realizando.

![Screenshot from 2022-07-17 10-24-58](https://user-images.githubusercontent.com/78239697/179407193-fba1b389-5726-4b37-bfa5-1b0419bb8c48.png)


# Estructura de Archivos más importantes


 * [src](./src)
 * [componentes principales de la tienda](./src/components)
   * [inicio de tienda y sección principal](./src/components/page)
   * [Página de la tienda](./src/components/page/productos)
   * [Páginas informativas](./src/components/page/sections)
 * [context de la tienda](./src/context)
 * [imagenes para LocalHost](./src/images)

### `npm install` Una vez se descargue hay que instalar las dependencias que vienen definidas en package.json

### `npm start`

Arranca el proyecto, después de haber corrido "npm install", por default abre el explorador en localhost:3000, en caso que esté usándose la terminal preguntará si es posible abrir en otro puerto que se asignará automáticamente.

La página se actualizará automáticamente si se hace algún cambio.


### `npm run build`


Construye la carpeta para producción, una vez realizado todo el desarrollo en el ambiente de trabajo local. Actualmente se está hosteando en el siguiente enlace:

https://guileless-bonbon-04de60.netlify.app/

## Falta por agregar funcionalidad en firebase y detalles de estilos en general, además de la conversión a React-Router-Dom v.6

