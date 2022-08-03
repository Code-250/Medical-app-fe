import { SIGNUP_AUTH, LOGIN_AUTH } from "./types";

const initialState = {
  lading: false,
  data: {},
  error: null,
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${SIGNUP_AUTH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${SIGNUP_AUTH}_SUCCESS`:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case `${SIGNUP_AUTH}_REJECTED`:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN_AUTH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${LOGIN_AUTH}_SUCCESS`:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case `${LOGIN_AUTH}_REJECTED`:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
