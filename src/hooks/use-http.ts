import { useReducer, useCallback } from 'react';

interface HttpState {
  data: any;
  error: string | null;
  isLoading: boolean;
}

type HttpAction =
  | { type: 'SEND' }
  | { type: 'SUCCESS'; responseData: any }
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

function useHttp(requestFunction: () => Promise<any>) {
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
