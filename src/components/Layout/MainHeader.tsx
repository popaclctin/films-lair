import React from 'react';
import SearchInput from '../UI/SearchInput';
import { Header } from './MainHeader.styles';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-redux';
import { isLoggedOut } from '../../store/auth-slice';

const MainHeader: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const email = useAppSelector((state) => state.auth.email);
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(isLoggedOut());
  };

  return (
    <Header>
      <Link to='/'>
        <h1>Films Lair</h1>
      </Link>
      <SearchInput />
      <nav>
        <ul>
          {isLoggedIn && <li>Favorites Button</li>}
          {isLoggedIn && <li>{email}</li>}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
          {!isLoggedIn && <Link to='/auth'>Login</Link>}
        </ul>
      </nav>
    </Header>
  );
};

export default MainHeader;
