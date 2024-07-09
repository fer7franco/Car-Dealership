import { IsString, MinLength } from 'class-validator';
//import { PartialType } from '@nestjs/mapped-types';
//import { CreateBrandDto } from './create-brand.dto';
// DTO tradicional: export class UpdateBranDTO... la palabra partialtype hace que todas las propiedas del DTO que estoy expandiendo sean opcionales
// DTO presentado por el CLI: export class UpdateBrandDto extends PartialType(CreateBrandDto) {}, este se utiliza cuando el parametro tiene mas de una propiedad en este caso no.

// para este ejercicio solo ocupamos actualizar el name.

export class UpdateBrandDto {
  @IsString()
  @MinLength(1)
  name: string;
}
