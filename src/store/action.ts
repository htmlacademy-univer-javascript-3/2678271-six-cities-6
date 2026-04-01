import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import { CityName, SortOption } from '../const';

export const changeCity = createAction<CityName>('changeCity');

export const changeSort = createAction<SortOption>('changeSort');

export const fillOffersList = createAction<Offer[]>('fillOffersList');

export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
