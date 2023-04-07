import { Sequelize } from 'sequelize-typescript';
import { PlacesStates } from './placesStates/models/placesStates.entity';
import { Sellers } from './sellers/models/sellers.entity';


export const DatabaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        define: {
          timestamps: false
        },
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'wedydKyN67@3',
        database: 'event_place_db',
      });
      sequelize.addModels([PlacesStates, Sellers]);
      await sequelize.sync();
      return sequelize;
    },
  },
];