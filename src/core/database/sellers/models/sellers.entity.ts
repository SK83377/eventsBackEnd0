import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Sellers extends Model {
    @Column({
        type: DataType.INTEGER,
        /*allowNull: false,*/
        primaryKey: true,
        autoIncrement: true
    })
    id: number;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    company: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    access_key: string;
}