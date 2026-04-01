import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffersList, changeSort,setOffersLoadingStatus} from '../store/action';
import { SortOption, CityName } from '../const';
import {Offer} from '../types/offer';

type State = {
  offers: Offer[];
  isOffersLoading: boolean;
  city: CityName;
  sort: SortOption;
};

const initialState: State = {
  offers: [],
  isOffersLoading: false,
  city: 'Paris',
  sort: SortOption.Popular,
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
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});

export {reducer};
