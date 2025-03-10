export const ADD_RATES = 'ADD_RATES';
export const UPDATE_RATES = 'UPDATE_RATES';
export const GET_RATES = 'GET_RATES';
export const DELETE_RATES = 'DELETE_RATES';
export const DELETE_RATE_BY_ID = 'DELETE_RATE_BY_ID';
const initialState = {
  value: undefined,
  loading: false,
  status: null
};
const rateRaducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RATES:
      return {
        ...state,
        value: action.ratesResponse,
        status: action.status
      };
    case UPDATE_RATES:
      return {
        ...state,
        value: action.ratesResponse,
        status: action.status
      };
    case GET_RATES:
      return {
        ...state,
        value: action.ratesResponse,
        status: action.status
      };
    case DELETE_RATE_BY_ID:
      return {
        ...state,
        value: action.ratesResponse,
        status: action.status
      };
    case DELETE_RATES:
      return {
        ...state,
        value: action.ratesResponse,
        status: action.status
      };

    default:
      return state;
  }
};
export default rateRaducer;
