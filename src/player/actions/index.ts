import { addCharacterBodyToHead, playerCoordinatesLimits, PLAYER_WIDTH, didTheCharacterHeadCollideWithFood, didTheCharacterCollideWithItself } from "../index";
import { StateType } from "../../store";
import { addNewCharacterHead, changeCharacterDirectionState, changeCharacterPartPositionState, changeTheIsItNeedToSpawnAnEnemyState } from "../../store/actions";
import { characterSelector } from "../../store/selectors";
import { refreshWindow } from "../../utils";

const playerActions = (state: StateType) => {
  const {width: horizontalLimit, height: verticalLimit} = playerCoordinatesLimits();
  const character = characterSelector(state);
  const characterHead = character.position[character.position.length - 1];

  return {
    ArrowUp: () => {
      if (character.direction === 'ArrowDown') return;

      if (characterHead.y - PLAYER_WIDTH >= 0) {
        changeCharacterDirectionState(state, 'ArrowUp');

        const nextCharacterHead = {
          x: characterHead.x,
          y: characterHead.y - PLAYER_WIDTH * 2
        }

        const originalCharacter = JSON.parse(JSON.stringify(character));

        changeCharacterPartPositionState(
          state, 
          character.position.length - 1, 
          characterHead.x, 
          characterHead.y - PLAYER_WIDTH
        );

        if (didTheCharacterCollideWithItself(state, nextCharacterHead)) refreshWindow();

        if (didTheCharacterHeadCollideWithFood(state, nextCharacterHead)) {
          addNewCharacterHead(state, nextCharacterHead);
          changeTheIsItNeedToSpawnAnEnemyState(state, true);
        }

        addCharacterBodyToHead(state, originalCharacter);
        return
      }
      
      refreshWindow();
    },

    ArrowDown: () => {
      if (character.direction === 'ArrowUp') return;

      if (characterHead.y + PLAYER_WIDTH <= verticalLimit) {
        changeCharacterDirectionState(state, 'ArrowDown');

        const nextCharacterHead = {
          x: characterHead.x,
          y: characterHead.y + PLAYER_WIDTH * 2
        }

        const originalCharacter = JSON.parse(JSON.stringify(character));

        changeCharacterPartPositionState(
          state, 
          character.position.length - 1, 
          characterHead.x, 
          characterHead.y + PLAYER_WIDTH
        );

        if (didTheCharacterCollideWithItself(state, nextCharacterHead)) refreshWindow();

        if (didTheCharacterHeadCollideWithFood(state, nextCharacterHead)) {
          addNewCharacterHead(state, nextCharacterHead);
          changeTheIsItNeedToSpawnAnEnemyState(state, true);
        }

        addCharacterBodyToHead(state, originalCharacter);
        return
      }

      refreshWindow();
    },

    ArrowRight: () => {
      if (character.direction === 'ArrowLeft') return;

      if (characterHead.x + PLAYER_WIDTH <= horizontalLimit) {
        changeCharacterDirectionState(state, 'ArrowRight');

        const nextCharacterHead = {
          x: characterHead.x + PLAYER_WIDTH * 2,
          y: characterHead.y
        }

        const originalCharacter = JSON.parse(JSON.stringify(character));

        changeCharacterPartPositionState(
          state, 
          character.position.length - 1, 
          characterHead.x + PLAYER_WIDTH, 
          characterHead.y
        );

        if (didTheCharacterCollideWithItself(state, nextCharacterHead)) refreshWindow();

        if (didTheCharacterHeadCollideWithFood(state, nextCharacterHead)) {
          addNewCharacterHead(state, nextCharacterHead);
          changeTheIsItNeedToSpawnAnEnemyState(state, true);
        }

        addCharacterBodyToHead(state, originalCharacter);
        return
      }

      refreshWindow();
    },

    ArrowLeft: () => {
      if (character.direction === 'ArrowRight') return;

      if (characterHead.x - PLAYER_WIDTH >= 0) {
        changeCharacterDirectionState(state, 'ArrowLeft');

        const nextCharacterHead = {
          x: characterHead.x - PLAYER_WIDTH * 2,
          y: characterHead.y
        }
        
        const originalCharacter = JSON.parse(JSON.stringify(character));

        changeCharacterPartPositionState(
          state, 
          character.position.length - 1, 
          characterHead.x - PLAYER_WIDTH, 
          characterHead.y
        );

        if (didTheCharacterCollideWithItself(state, nextCharacterHead)) refreshWindow();
        
        if (didTheCharacterHeadCollideWithFood(state, nextCharacterHead)) {
          addNewCharacterHead(state, nextCharacterHead);
          changeTheIsItNeedToSpawnAnEnemyState(state, true);
        }
        
        addCharacterBodyToHead(state, originalCharacter);
        return
      }

      refreshWindow();
    },
  }
}

export default playerActions;
