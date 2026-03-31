import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers';
import {changeCity, fillOffersList, changeSort} from '../store/action';
import { SortOption } from '../const';

const initialState = {
  offers,
  city: offers[0].city.name,
  sort: SortOption.Popular
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
    });
});

export {reducer};
