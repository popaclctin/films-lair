import React from 'react';
import SearchInput from '../UI/SearchInput';
import { Header } from './MainHeader.styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-redux';
import { isLoggedOut } from '../../store/auth-slice';

const MainHeader: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const email = useAppSelector((state) => state.auth.email);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(isLoggedOut());
    navigate('/', { replace: true });
  };

  const location = useLocation();
  return (
    <Header>
      <Link to='/'>
        <h1>Films Lair</h1>
      </Link>
      {location.pathname === '/films' ? <SearchInput /> : null}
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
              <button onClick={logoutHandler} className='logoutBtn'>
                Logout
              </button>
            </li>
          )}
          {!isLoggedIn && <Link to='/auth'>Login</Link>}
        </ul>
      </nav>
    </Header>
  );
};

export default MainHeader;
