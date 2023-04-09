import { IsNotEmpty, MinLength } from 'class-validator';

export class CompanyDto {
    @IsNotEmpty()
    readonly company: string;

    @IsNotEmpty()
    readonly password: string;
}