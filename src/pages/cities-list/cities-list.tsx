import { Link } from 'react-router-dom';
import { CITIES, CityName } from '../../const';

type CitiesListProps = {
  activeCity: CityName;
  onCityChange: (city: CityName) => void;
}

function CitiesList({ activeCity, onCityChange }: CitiesListProps){


  const handleClick = (city: CityName) => {
    onCityChange(city);
  };

  return(
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li key={city} className="locations__item">
          <Link
            to='/'
            className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
            onClick={() => handleClick(city)}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default CitiesList;
