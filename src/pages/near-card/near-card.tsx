import Card from '../card/card';
import { Offer } from '../../types/offer';

type NearCardProps = {
  offer: Offer;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function NearCard(props: NearCardProps) {
  return <Card {...props} variant="near" />;
}

export default NearCard;
