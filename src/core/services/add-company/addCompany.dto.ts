import { IsNotEmpty, MinLength } from 'class-validator';

export class AddCompanyDto {
    @IsNotEmpty()
    readonly company: string;
    @IsNotEmpty()
    readonly access_key: string;
}