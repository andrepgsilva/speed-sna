import { SCREEN_MAX_X, SCREEN_MAX_Y } from "../screen";
import { CharacterType, CoordinatesType, StateType } from "../store";
import { changeCharacterPartPositionState } from "../store/actions";

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

export const didTheCharacterHeadCollideWithSomething = (state: StateType, characterHeadCoordinates: CoordinatesType) => {
  const character = state.character.position;
  const characterHead = character[character.length - 1];

  // Enemy collision
  if (characterHead.x === state.enemies[0].position.x && characterHead.y === state.enemies[0].position.y) {
    return true
  }

  // 

  return false
}