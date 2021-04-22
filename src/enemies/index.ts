import { StateType } from "../store";
import { addEnemyPositionState } from "../store/actions";
import { getRandomInt } from "../utils";

export const randomAnEnemyPosition = (state = null) => {
  const freeCoordinates = state.screen.screenMapCoordinates;
  let auxFreeCoordinates = JSON.parse(JSON.stringify(freeCoordinates));

  const characterPosition = state.character.position;
  
  for (let i = 0; i < characterPosition.length; i++) {
    const position = characterPosition[i];
    
    freeCoordinates.forEach((coordinate, index) => {
      const happenedCoordinateMatch = coordinate.x === position.x && coordinate.y === position.y;
      
      if (happenedCoordinateMatch) {
        delete auxFreeCoordinates[index]
      }
    });
  }

  const randomFreeCoordinateIndex = getRandomInt(0, auxFreeCoordinates.length - 1);
  const enemyCoordinate = auxFreeCoordinates[randomFreeCoordinateIndex];

  return {
    position: {
      x: enemyCoordinate.x,
      y: enemyCoordinate.y
    }
  }
}

export const addAnEnemyInState = (state: StateType) => {
  const enemyCoordinatesPosition = randomAnEnemyPosition(state).position;
  
  addEnemyPositionState(state, enemyCoordinatesPosition);
}