import {Offer} from '../../types/offer';
import Card from '../card/card';
import {useState} from 'react';


type OfferListProps = {
  offers: Offer[];
};

function OfferList(props: OfferListProps){
  const {offers} = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}
export default OfferList;
