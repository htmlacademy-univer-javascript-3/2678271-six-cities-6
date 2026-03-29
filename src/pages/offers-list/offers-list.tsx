import {Offer} from '../../types/offer';
import Card from '../card/card';

type OfferListProps = {
  offers: Offer[];
  variant?: 'cities' | 'near';
  activeCardId: string | null;
  onCardHover: (id: string | null) => void;
};

function OfferList(props: OfferListProps){
  const {offers, variant = 'cities', activeCardId, onCardHover} = props;

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
          onMouseEnter={() => onCardHover(offer.id)}
          onMouseLeave={() => onCardHover(null)}
        />
      ))}
    </div>
  );
}
export default OfferList;
