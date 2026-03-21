import {Offer} from '../../types/offer';
import Card from '../card/card';
import {useState} from 'react';


type OfferListProps = {
  offers: Offer[];
  variant?: 'cities' | 'near';
};

function OfferList(props: OfferListProps){
  const {offers, variant = 'cities'} = props;

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const containerClass = variant === 'cities'
    ? 'cities__places-list places__list tabs__content'
    : 'near-places__list places__list';

  return(
    <div className={containerClass}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          variant={variant}
          isActive={activeCardId === offer.id}
          onMouseEnter={() => setActiveCardId(offer.id)}
          onMouseLeave={() => setActiveCardId(null)}
        />
      ))}
    </div>
  );
}
export default OfferList;
