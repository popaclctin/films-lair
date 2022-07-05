import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Search } from './SearchInput.styles';
import { useAppDispatch, useAppSelector } from '../../hooks/use-redux';
import { searchTermChanged } from '../../store/films-slice';
import debounce from 'lodash.debounce';

export default function SearchInput() {
  const dispatch = useAppDispatch();
  const defaultSearchTerm = useAppSelector((state) => state.films.searchTerm);
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);

  const debouncedDispatch = useMemo(() => debounce(dispatch, 200), [dispatch]);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setSearchTerm(event.target.value);
      debouncedDispatch(searchTermChanged(event.target.value));
    },
    [debouncedDispatch]
  );

  useEffect(() => {
    return () => debouncedDispatch.cancel();
  }, [debouncedDispatch]);

  return (
    <Search>
      <input
        type='text'
        placeholder='Search by film title'
        onChange={changeHandler}
        value={searchTerm}
      />
      <FontAwesomeIcon icon={faSearch} className='search-icon' />
    </Search>
  );
}
