import { SCREEN_MAX_X, SCREEN_MAX_Y } from "../screen"
import { StateType } from "../store";
import { addEnemyPositionState } from "../store/actions";
import { characterSelector } from "../store/selectors"
import { getRandomInt } from "../utils";

export const randomAnEnemyPosition = (state = null) => {
  const character = characterSelector(state);
  const characterPosition = character.position;

  let enemyHorizontalPosition = getRandomInt(10, SCREEN_MAX_X);
  let enemyVerticalPosition = getRandomInt(10, SCREEN_MAX_Y);

  return {
    position: {
      x: enemyHorizontalPosition,
      y: enemyVerticalPosition
    }
  }
}

export const addAnEnemyInState = (state: StateType) => {
  const enemyCoordinatesPosition = randomAnEnemyPosition(state).position;

  addEnemyPositionState(state, enemyCoordinatesPosition);
}