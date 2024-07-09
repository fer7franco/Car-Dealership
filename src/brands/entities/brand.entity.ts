// como quiero que quede la informacion guardada en la base de datos
// las entitys son de las pocas clases que no tienen la extencion en su nombre 
export class Brand {
  id: string;
  name: string;
// fecha en la que se creo 
  createdAt: number;
// fecha en el que se actualiazo 
  updatedAt?: number;
  // asi luce la tabla que contiene mis datos 
}
