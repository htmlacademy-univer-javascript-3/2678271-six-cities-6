import {Offer} from '../../types/offer';
import { Link } from 'react-router-dom';

export type CardProps = {
  offer: Offer;
  variant?: 'cities' | 'near';
  isActive?: boolean;
  onMouseEnter: (offer: Offer['id']) => void;
  onMouseLeave: () => void;
};

function Card(props: CardProps){
  const { offer, variant = 'cities', onMouseEnter, onMouseLeave, isActive } = props;
  const {id, title, type, price, previewImage, isFavorite, isPremium, rating} = offer;

  const ratingWidth = `${Math.round(rating) * 20}%`;

  const classPrefix = variant === 'cities' ? 'cities' : 'near-places';

  return(
    <article
      className={`${classPrefix}__card place-card ${isActive ? 'place-card--active' : ''}`}
      onMouseEnter={() => onMouseEnter(offer.id)}
      onMouseLeave={() => onMouseLeave()}
    >
      <div className="place-card__mark">
        {isPremium ? <span>Premium</span> : ''}
      </div>
      <div className={`${classPrefix}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">
              /&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingWidth }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p
          className="place-card__type"
          style={{ textTransform: 'capitalize' }}
        >
          {type}
        </p>
      </div>
    </article>
  );
}
export default Card;
