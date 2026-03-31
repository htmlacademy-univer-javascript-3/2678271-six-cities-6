import {SortOption} from './const';
import {Offer} from './types/offer';

export const getSortedOffers = (offers: Offer[], sortType: SortOption) => {
  switch(sortType) {
    case SortOption.PriceHighToLow:
      return offers.toSorted((a, b) => b.price - a.price);
    case SortOption.PriceLowToHigh:
      return offers.toSorted((a, b) => a.price - b.price);
    case SortOption.TopRatedFirst:
      return offers.toSorted((a, b) => b.rating - a.rating);
    default:
      return offers.toSorted();
  }
};
