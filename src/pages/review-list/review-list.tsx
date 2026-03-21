import {Review as ReviewType} from '../../types/review';
import Review from '../review/review';

type OfferListProps = {
  reviews: ReviewType[];
};

function ReviewList(props: OfferListProps) {
  const { reviews } = props;
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}
export default ReviewList;


