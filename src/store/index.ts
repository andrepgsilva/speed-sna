import Observable, { ObservableType } from '../Observable';
import { PLAYER_WIDTH } from '../player';
import { SCREEN_CENTER_X, SCREEN_CENTER_Y } from '../screen';

export type CharacterPositionType = {
  x: number,
  y: number
}

export type CharacterDirectionType = 'ArrowUp' | 'ArrowDown' | 'ArrowRight' | 'ArrowLeft';

export type CharacterType = {
  position: Array<CharacterPositionType>,
  direction: CharacterDirectionType
};

type StateType = {
  observer: ObservableType,
  character: CharacterType

  input: {
    availableInputs: Array<string>
  }
};

const state: StateType = {
  observer: new Observable(),
  character: {
    position: [
      { x: SCREEN_CENTER_X, y: SCREEN_CENTER_Y },
      { x: SCREEN_CENTER_X + PLAYER_WIDTH, y: SCREEN_CENTER_Y },
      { x: SCREEN_CENTER_X + PLAYER_WIDTH * 2, y: SCREEN_CENTER_Y },
    ],
    direction: 'ArrowRight',
  },
  input: {
    availableInputs: ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft']
  }
}

export { state, StateType }