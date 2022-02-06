import {IsString, IsNotEmpty} from 'class-validator'

export class UsersDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    id: number;
}