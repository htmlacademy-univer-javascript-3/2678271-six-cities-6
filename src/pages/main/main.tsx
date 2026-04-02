import OfferList from '../offers-list/offers-list';
import {Offer} from '../../types/offer';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import EmptyMain from '../empty-main/empty-main';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeCity, changeSort } from '../../store/action';
import { CityName } from '../../const';
import SortOptions from '../sort-options/sort-options';
import { useEffect, useState } from 'react';
import {SortOption} from '../../const';
import {getSortedOffers} from '../../utils';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {fetchOffersAction} from '../../store/api-action';

function getCityOffers(offers: Offer[], city: string){
  return offers.filter((offer) => offer.city.name === city);
}

function Main() {
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  const activeCity = useAppSelector((store) => store.city);
  const activeSort = useAppSelector((store) => store.sort);
  const allOffers = useAppSelector((store) => store.offers);

  const dispatch = useAppDispatch();

  const cityOffers = getCityOffers(allOffers, activeCity);
  const hasOffers = cityOffers.length > 0;
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchOffersAction());
  },);

  const handleCityChange = (city: CityName) => {
    dispatch(changeCity(city));
  };

  const handleSortChange = (sort: SortOption) => {
    dispatch(changeSort(sort));
  };

  const offers = getSortedOffers(cityOffers, activeSort);
  const activeOffer = offers.find((offer) => offer.id === activeCardId) || null;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={`page__main page__main--index ${!hasOffers ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              activeCity={activeCity}
              onCityChange={handleCityChange}
            />
          </section>
        </div>
        {isOffersLoading ? <LoadingScreen /> :
          <div>
            {hasOffers ? (
              <div className="cities">
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{offers.length} places to stay in {activeCity}</b>
                    <SortOptions
                      activeSort={activeSort}
                      onSortChange={handleSortChange}
                    />
                    <div className="cities__places-list places__list tabs__content">
                      <OfferList
                        offers={offers}
                        activeCardId={activeCardId}
                        onCardHover={setActiveCardId}
                      />
                    </div>
                  </section>
                  <div className="cities__right-section">
                    <section className="cities__map map">
                      <Map
                        city={offers[0].city.location}
                        points={offers}
                        selectedPoint={activeOffer}
                      />
                    </section>
                  </div>
                </div>
              </div>
            ) : <EmptyMain activeCity={activeCity} />}
          </div>}
      </main>
    </div>
  );
}
export default Main;
