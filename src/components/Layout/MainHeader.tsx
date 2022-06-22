import React from 'react';
import SearchInput from '../UI/SearchInput';
import { Header } from './MainHeader.styles';
import { Link } from 'react-router-dom';

const MainHeader: React.FC = () => {
  return (
    <Header>
      <Link to='/'>
        <h1>Films Lair</h1>
      </Link>
      <SearchInput />
      <nav>
        <ul>
          <li>Favorites</li>
          <li>Username</li>
        </ul>
      </nav>
    </Header>
  );
};

export default MainHeader;
