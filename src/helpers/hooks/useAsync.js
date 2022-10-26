import { usetate, useCallback, useReducer, useRef } from "react";

import useSafeDispatch from "./useSafeDispatch";

const defaultState = {
  data: null,
  status: "idle",
  error: null,
};

const UseAsync = (initialState) => {
  const initialStateRef = useRef({ ...defaultState, ...initialState });

  const [{ data, status, error }, safeSetState] = useReducer((state, action) => {
    return { ...state, ...action };
  }, initialStateRef.current);

  const safesafeSetState = useSafeDispatch(safeSetState);

  const run = useCallback(
    (promise) => {
      if (!promise || !promise.then) throw new Error(`The Argument passed to useAsyncs().run must be a promise`);

      safeSetState({ status: "pending" });

      return promise.then(
        (data) => {
          safeSetState({ data, status: "resolved" });

          return data;
        },
        (error) => {
          safeSetState({ status: "rejected", error: JSON.parse(error.message) });
        }
      );
    },
    [safeSetState]
  );

  const setData = useCallback(
    (data) => {
      safeSetState({ data });
    },
    [safeSetState]
  );

  const setError = useCallback(
    (data) => {
      safeSetState({ error });
    },
    [safeSetState]
  );

  const reset = useCallback(() => {
    safeSetState(initialState.current);
  }, [safeSetState]);

  return { data, status, error, run, setData, setError, reset, isIdle: status === "idle", isLoading: status === "idle" || status === "pending", isError: status === "rejected", isSuccess: status === "resolved" };
};

export default UseAsync;
