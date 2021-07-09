declare module '*.jpg' {
  const value: any;
  export = value;
  // Solo para agregar a esta respuesta. Lo probé con esta solución y no funcionó. Hice una pregunta
  // aquí: stackoverflow.com/questions/51100401/typescript-image-import/… . El problema fue un error
  // de tiempo de compilación. Al corregir export default valuea export = valueo btendrá
  // verificación de tipos correcta y que va a funcionar. Gracias por llevarnos a la solución final.
}

//PODEMOS HACERLO PARA UNA EXTENSION ESPECIFICA, Example: esto aun no arojaba un error, aun no sabemos por qué
// declare module "*.jpg" {
//   export default "" as string;
// }
// declare module "*.png" {
//   export default "" as string;
// }
