import { addCharacterBodyToHead, playerCoordinatesLimits, PLAYER_WIDTH } from "../index";
import { StateType } from "../../store";
import { changeCharacterDirectionState, changeCharacterPartPositionState } from "../../store/actions";
import { characterSelector } from "../../store/selectors";

const playerActions = (state: StateType) => {
  const {width: horizontalLimit, height: verticalLimit} = playerCoordinatesLimits();
  const character = characterSelector(state);
  const characterHead = character.position[character.position.length - 1];

  return {
    ArrowUp: () => {
      if (character.direction === 'ArrowDown') return;

      if (characterHead.y - PLAYER_WIDTH >= 0) {
        changeCharacterDirectionState(state, 'ArrowUp');

        const originalCharacter = JSON.parse(JSON.stringify(character));

        changeCharacterPartPositionState(
          state, 
          character.position.length - 1, 
          characterHead.x, 
          characterHead.y - PLAYER_WIDTH
        );

        addCharacterBodyToHead(state, originalCharacter);
      }
    },

    ArrowDown: () => {
      if (character.direction === 'ArrowUp') return;

      if (characterHead.y + PLAYER_WIDTH <= verticalLimit) {
        changeCharacterDirectionState(state, 'ArrowDown');

        const originalCharacter = JSON.parse(JSON.stringify(character));

        changeCharacterPartPositionState(
          state, 
          character.position.length - 1, 
          characterHead.x, 
          characterHead.y + PLAYER_WIDTH
        );

        addCharacterBodyToHead(state, originalCharacter);
      }
    },

    ArrowRight: () => {
      if (character.direction === 'ArrowLeft') return;

      if (characterHead.x + PLAYER_WIDTH <= horizontalLimit) {
        changeCharacterDirectionState(state, 'ArrowRight');

        const originalCharacter = JSON.parse(JSON.stringify(character));

        changeCharacterPartPositionState(
          state, 
          character.position.length - 1, 
          characterHead.x + PLAYER_WIDTH, 
          characterHead.y
        );

        addCharacterBodyToHead(state, originalCharacter);
      }
    },

    ArrowLeft: () => {
      if (character.direction === 'ArrowRight') return;

      if (characterHead.x - PLAYER_WIDTH >= 0) {
        changeCharacterDirectionState(state, 'ArrowLeft');
        
        const originalCharacter = JSON.parse(JSON.stringify(character));

        changeCharacterPartPositionState(
          state, 
          character.position.length - 1, 
          characterHead.x - PLAYER_WIDTH, 
          characterHead.y
        );
        
        addCharacterBodyToHead(state, originalCharacter);
      }
    },
  }
}

export default playerActions;
