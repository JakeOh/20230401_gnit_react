import * as Actions from '../actions/postDetailsActions';

// state 초깃값
const initialState = {
  post: {},
  loading: false,
  hasError: false,
};

// reducer
const postDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_POST_DETAILS:
      return {
        ...state,
        loading: true,
      };

    case Actions.GET_POST_DETAILS_SUCCESS:
      return {
        post: action.payload,
        loading: false,
        hasError: false,
      };

    case Actions.GET_POST_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        hasError: true,
      };

    default:
      return state;
  }
};

export default postDetailsReducer;
