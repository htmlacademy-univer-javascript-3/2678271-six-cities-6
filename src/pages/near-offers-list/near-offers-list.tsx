import {Offer} from '../../types/offer';
import OfferList from '../offers-list/offers-list';

type NearOffersListProps = {
  offers: Offer[];
};

function NearOffersList(props: NearOffersListProps) {
  return <OfferList {...props} variant="near" />;
}

export default NearOffersList;
