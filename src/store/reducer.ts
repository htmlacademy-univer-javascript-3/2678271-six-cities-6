import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffersList, changeSort,setOffersLoadingStatus, requireAuthorization} from '../store/action';
import { SortOption, CityName, AuthorizationStatus } from '../const';
import {Offer} from '../types/offer';

type State = {
  offers: Offer[];
  isOffersLoading: boolean;
  city: CityName;
  sort: SortOption;
  authorizationStatus: AuthorizationStatus;
};

const initialState: State = {
  offers: [],
  isOffersLoading: false,
  city: 'Paris',
  sort: SortOption.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});

export {reducer};
