import * as ActionTypes from "./ActionTypes";

export const gameCards = (
  state = { isLoading: true, errMess: null, gameCards: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_GAMECARDS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        gameCards: action.payload,
      };

    case ActionTypes.GAMECARDS_LOADING:
      return { ...state, isLoading: true, errMess: null, gameCards: [] };

    case ActionTypes.GAMECARDS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
