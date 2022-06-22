import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Search } from './SearchInput.styles';

export default function SearchInput() {
  return (
    <Search>
      <input type='text' placeholder='Search by film title' />
      <FontAwesomeIcon icon={faSearch} className='search-icon' />
    </Search>
  );
}
