import { IsNotEmpty, MinLength } from 'class-validator';

export class ReserveDto {
    @IsNotEmpty()
    readonly id: number;

    @IsNotEmpty()
    readonly places: [];
}