import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// GAME CARDS

export const fetchGameCards = () => (dispatch) => {
  dispatch(gameCardsLoading());

  return fetch(baseUrl + "gameCards")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((gameCards) => dispatch(addGameCards(gameCards)))
    .catch((error) => dispatch(gameCardsFailed(error.message)));
};

export const gameCardsLoading = () => ({
  type: ActionTypes.GAMECARDS_LOADING,
});

export const gameCardsFailed = (errMess) => ({
  type: ActionTypes.GAMECARDS_FAILED,
  payload: errMess,
});

export const addGameCards = (gameCards) => ({
  type: ActionTypes.ADD_GAMECARDS,
  payload: gameCards,
});

// SIMILAR GAMES

export const fetchSimilarGames = () => (dispatch) => {
  dispatch(similarGamesLoading());

  return fetch(baseUrl + "similarGames")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((similarGames) => dispatch(addSimilarGames(similarGames)))
    .catch((error) => dispatch(similarGamesFailed(error.message)));
};

export const similarGamesLoading = () => ({
  type: ActionTypes.SIMILARGAMES_LOADING,
});

export const similarGamesFailed = (errMess) => ({
  type: ActionTypes.SIMILARGAMES_FAILED,
  payload: errMess,
});

export const addSimilarGames = (similarGames) => ({
  type: ActionTypes.ADD_SIMILARGAMES,
  payload: similarGames,
});
