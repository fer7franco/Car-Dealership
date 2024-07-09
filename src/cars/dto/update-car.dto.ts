import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

// los DTOS se crean basados en la inofrmacion qeu esperamos de un endpoind y las
// validaciones se hacen  con los diferentes decoradores qeu nos muestra class-valitator

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}
