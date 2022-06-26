import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-redux';
import { signInUser, signUpUser, statusChanged } from '../../store/auth-slice';
import { LoadingSpinner } from '../UI/LoadingSpinner';

const AuthForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.auth.status);
  // const error = useAppSelector((state) => state.auth.error);
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (status === 'succeeded') {
      navigate('/films', { replace: true });
      dispatch(statusChanged('idle'));
    }
  }, [status, navigate, dispatch]);

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
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section>
      <h1>{isLogin ? 'Login' : 'Create an account'}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div>
          <button type='submit' disabled={status === 'loading'}>
            {status === 'loading' ? (
              <LoadingSpinner />
            ) : isLogin ? (
              'Login'
            ) : (
              'Create account'
            )}
          </button>
          <button type='button' onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
