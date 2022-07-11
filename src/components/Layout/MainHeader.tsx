import React, { useState } from 'react';
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
  const [isChecked, setIsChecked] = useState(false);

  const logoutHandler = () => {
    dispatch(isLoggedOut());
    navigate('/', { replace: true });
  };

  const menuClickHandler: React.MouseEventHandler<HTMLElement> = (event) => {
    const link = (event.target as HTMLElement).closest('a');
    if (!link) return;
    setIsChecked(false);
  };

  const checkboxClickHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => setIsChecked(event.target.checked);

  const location = useLocation();
  return (
    <Header>
      <Link to='/' className='logo'>
        <h1>Films Lair</h1>
      </Link>
      {location.pathname === '/films' ? <SearchInput /> : null}
      <input
        className='side-menu'
        type='checkbox'
        id='side-menu'
        checked={isChecked}
        onChange={checkboxClickHandler}
      />
      <label className='hamb' htmlFor='side-menu'>
        <span className='hamb-line'></span>
      </label>
      <nav onClick={menuClickHandler}>
        <ul>
          {isLoggedIn && (
            <li>
              <Link to='/watchlist'>My WatchList</Link>
            </li>
          )}
          {isLoggedIn && <li className='email'>{email}</li>}
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
