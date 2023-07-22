import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class SignInDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'Username não pode ser vazio!' })
    username: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Senha não pode ser vazia!' })
    password: string;

}