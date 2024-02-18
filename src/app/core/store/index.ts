import { featureName as authFeatureName, authReducer } from './auth/reducers';
import {
    featureName as contadorFeatureName,
    contadorReducer,
} from './contador/reducers';

export const appReducers = {
  [contadorFeatureName]: contadorReducer,
  [authFeatureName]: authReducer,
};