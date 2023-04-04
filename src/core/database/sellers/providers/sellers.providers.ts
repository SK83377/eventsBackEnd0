import { Sellers } from '../models/sellers.entity';
import { SELLERS_REPOSITORY } from '../../../constants';


export const SellersProviders = [
  {
    provide: SELLERS_REPOSITORY,
    useValue: Sellers,
  },
];