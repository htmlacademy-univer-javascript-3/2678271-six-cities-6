import {Offers} from '../../types/offer';
import Card from '../card/card';
import {useState} from 'react';


type OffersListProps = {
  offers: Offers[];
};

function OffersList(props: OffersListProps){
  const {offers} = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return(
    offers.map((offer) => (
      <Card
        key={offer.id}
        offer={offer}
      />
    ))

  );
}
export default OffersList;
