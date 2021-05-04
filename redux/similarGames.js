import * as ActionTypes from "./ActionTypes";

export const similarGames = (
  state = { isLoading: true, errMess: null, similarGames: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_SIMILARGAMES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        similarGames: action.payload,
      };

    case ActionTypes.SIMILARGAMES_LOADING:
      return { ...state, isLoading: true, errMess: null, similarGames: [] };

    case ActionTypes.SIMILARGAMES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
