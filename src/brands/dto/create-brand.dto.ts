import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {
// esta e sla informacion que quiero que me envien median el POST
// estaria esperando solo el name.

@IsString()
@MinLength(1)
name: string;
}
