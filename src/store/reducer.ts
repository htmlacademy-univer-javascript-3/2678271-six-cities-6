import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers';
import {changeCity, fillOffersList} from '../store/action';

const initialState = {
  offers,
  city: offers[0].city.name
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
