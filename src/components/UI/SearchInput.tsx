import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Search } from './SearchInput.styles';

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function SearchInput({ onChange }: Props) {
  return (
    <Search>
      <input
        type='text'
        placeholder='Search by film title'
        onChange={onChange}
      />
      <FontAwesomeIcon icon={faSearch} className='search-icon' />
    </Search>
  );
}
