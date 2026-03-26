import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import { CityName } from '../const';

export const changeCity = createAction<CityName>('changeCity');

export const fillOffersList = createAction<Offer[]>('fillOffersList');
