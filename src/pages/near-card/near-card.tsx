import Card from '../card/card';
import { CardProps } from '../card/card';

type NearCardProps = Omit<CardProps, 'variant'>;

function NearCard(props: NearCardProps) {
  return <Card {...props} variant="near" />;
}

export default NearCard;
