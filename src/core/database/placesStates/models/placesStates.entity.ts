import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class PlacesStates extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
    })
    id: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    event_id: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    row_id: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    place_id: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    place_state: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    seller_id: number;
}