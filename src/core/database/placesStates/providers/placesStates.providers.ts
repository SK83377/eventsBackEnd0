import { PlacesStates } from '../models/placesStates.entity';
import { PLACES_STATES_REPOSITORY } from '../../../constants';


export const PlacesStatesProviders = [
  {
    provide: PLACES_STATES_REPOSITORY,
    useValue: PlacesStates,
  },
];