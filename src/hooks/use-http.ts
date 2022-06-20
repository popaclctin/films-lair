import { useReducer, useCallback } from 'react';
import { Films, Film } from '../types/types';

interface HttpState {
  data: Films | Film | null;
  error: string | null;
  isLoading: boolean;
}

type HttpAction =
  | { type: 'SEND' }
  | { type: 'SUCCESS'; responseData: Films | Film }
  | { type: 'ERROR'; errorMessage: string };

function httpReducer(state: HttpState, action: HttpAction): HttpState {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      isLoading: true,
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      isLoading: false,
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      isLoading: false,
    };
  }

  return state;
}

interface UseHttpReturnType extends HttpState {
  sendRequest: () => Promise<void>;
}

function useHttp(
  requestFunction: () => Promise<Films | Film>
): UseHttpReturnType {
  const [state, dispatch] = useReducer(httpReducer, {
    data: null,
    error: null,
    isLoading: false,
  });

  const sendRequest = useCallback(async () => {
    dispatch({ type: 'SEND' });
    try {
      const responseData = await requestFunction();
      dispatch({ type: 'SUCCESS', responseData });
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      dispatch({
        type: 'ERROR',
        errorMessage: message || 'Something went wrong!',
      });
    }
  }, [requestFunction]);

  return {
    sendRequest,
    ...state,
  };
}

export default useHttp;
