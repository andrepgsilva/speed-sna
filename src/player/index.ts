import { SCREEN_MAX_X, SCREEN_MAX_Y } from "../screen";
import { CharacterType, CoordinatesType, StateType } from "../store";
import { addNewCharacterHead, changeCharacterPartPositionState } from "../store/actions";

export const PLAYER_WIDTH = 1;
export const PLAYER_HEIGHT = 1;

export const playerCoordinatesLimits = () => {
  return {
    width: SCREEN_MAX_X - PLAYER_WIDTH,
    height: SCREEN_MAX_Y - PLAYER_HEIGHT,
  }
}

export const addCharacterBodyToHead = (state: StateType, character: CharacterType) => {
  let characterPartPositionTrace = character.position[character.position.length - 1];

  character.position.slice().reverse().forEach((characterPartPosition, index) => {
    if (index === 0) return;

    changeCharacterPartPositionState(
      state,
      character.position.length - 1 - index,
      characterPartPositionTrace.x,
      characterPartPositionTrace.y
    );
    
    characterPartPositionTrace = { 
      x: characterPartPosition.x,
      y: characterPartPosition.y
    };
  });
}

export const wasThecharacterHeadCollidedWithFood = (state: StateType, characterHeadCoordinates: CoordinatesType) => {
  const character = state.character.position;
  const characterHead = character[character.length - 1];

  characterHeadCoordinates = characterHeadCoordinates !== undefined ? characterHeadCoordinates : characterHead;

  const enemies = state.enemies;

  let coordinateWhereTheCollisionOcurred = null;

  const wasTheCollisionOcurred = enemies.some(enemy => {
    if (characterHeadCoordinates.x === enemy.position.x && characterHeadCoordinates.y === enemy.position.y) {
      coordinateWhereTheCollisionOcurred = {
        x: enemy.position.x,
        y: enemy.position.y
      }

      return true;
    }
  })

  return wasTheCollisionOcurred ? coordinateWhereTheCollisionOcurred : false;
}