import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {fillOffersList, setOffersLoadingStatus} from './action';
import {AppRoute} from '../const';
import {Offer} from '../types/offer.js';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offer[]>(AppRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(fillOffersList(data));
  },
);
