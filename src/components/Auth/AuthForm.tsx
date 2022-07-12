import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-redux';
import { signInUser, signUpUser, statusChanged } from '../../store/auth-slice';
import { LoadingSpinner } from '../UI/LoadingSpinner';
import { PrimaryBtn } from '../UI/PrimaryBtn.style';
import { Wrapper } from './AuthForm.styles';

const AuthForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.auth.status);
  const error = useAppSelector((state) => state.auth.error);
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (status === 'succeeded') {
      dispatch(statusChanged('idle'));
      navigate('/films', { replace: true });
    }
  }, [status, navigate, dispatch]);

  useEffect(() => {
    document.title = isLogin ? 'Login - Films Lair' : 'Sign Up - Films Lair';
  }, [isLogin]);

  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();

    let enteredEmail = emailInputRef.current?.value?.trim();
    let enteredPassword = passwordInputRef.current?.value?.trim();

    const canSubmit = enteredEmail && enteredPassword;

    if (!canSubmit) return;

    if (isLogin) {
      dispatch(
        signInUser({ email: enteredEmail!, password: enteredPassword! })
      );
    } else {
      dispatch(
        signUpUser({ email: enteredEmail!, password: enteredPassword! })
      );
    }
  };

  const switchAuthModeHandler = () => {
    dispatch(statusChanged('idle'));
    setIsLogin((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <h1>{isLogin ? 'Login' : 'Create an account'}</h1>
      <form onSubmit={submitHandler}>
        <div className='form-input'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className='form-input'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        {status === 'failed' ? <p className='error'>{error}</p> : null}
        <PrimaryBtn type='submit' disabled={status === 'loading'}>
          {status === 'loading' ? (
            <LoadingSpinner />
          ) : isLogin ? (
            'Login'
          ) : (
            'Create account'
          )}
        </PrimaryBtn>
        <button
          type='button'
          onClick={switchAuthModeHandler}
          className='toggle'
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </form>
    </Wrapper>
  );
};

export default AuthForm;
