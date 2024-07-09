import { IsString, MinLength } from 'class-validator';

// los DTOS se crean basados en la inofrmacion qeu esperamos de un endpoind y las
// validaciones se hacen  con los diferentes decoradores qeu nos muestra class-valitator

export class CreateCarDto {
  @IsString(
    {message: 'the brand most be a cool string'}
  )
  readonly brand: string;
  @IsString()
  @MinLength(3)
  readonly model: string;
  static model: string;
}
