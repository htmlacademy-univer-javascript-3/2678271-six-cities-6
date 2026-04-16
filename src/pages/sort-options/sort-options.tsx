import {SortOption, SORT_OPTIONS} from '../../const';
import { useState } from 'react';

type SortOptionsProps = {
  activeSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

function SortOptions({ activeSort, onSortChange }: SortOptionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} data-testid="sort-dropdown" onClick={() => setIsOpen((prev) => !prev)}>
        {activeSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {SORT_OPTIONS.map((option) => (
          <li
            key={option}
            data-testid={option}
            className={`places__option ${option === activeSort ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              onSortChange(option);
              setIsOpen(false);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}
export default SortOptions;
