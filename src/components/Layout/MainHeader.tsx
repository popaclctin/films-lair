import React, { useCallback, useMemo } from 'react';
import SearchInput from '../UI/SearchInput';
import { Header } from './MainHeader.styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-redux';
import { isLoggedOut } from '../../store/auth-slice';
import { searchTermChanged } from '../../store/films-slice';
import debounce from 'lodash.debounce';

const MainHeader: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const email = useAppSelector((state) => state.auth.email);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(isLoggedOut());
    navigate('/', { replace: true });
  };

  const searchFilmHandler: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        dispatch(searchTermChanged(event.target.value));
      },
      [dispatch]
    );

  const debouncedSearchHandler = useMemo(
    () => debounce(searchFilmHandler, 300),
    [searchFilmHandler]
  );

  const location = useLocation();
  return (
    <Header>
      <Link to='/'>
        <h1>Films Lair</h1>
      </Link>
      {location.pathname === '/films' ? (
        <SearchInput onChange={debouncedSearchHandler} />
      ) : null}
      <nav>
        <ul>
          {isLoggedIn && (
            <li>
              <Link to='/watchlist'>My WatchList</Link>
            </li>
          )}
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
