import { randomAnEnemyPosition } from '../enemies';
import Observable, { ObservableType } from '../Observable';
import { PLAYER_WIDTH } from '../player';
import { getAllCoordinatesOnTheScreen, SCREEN_CENTER_X, SCREEN_CENTER_Y } from '../screen';

export type CoordinatesType = {
  x: number,
  y: number
}
export type CharacterPositionType = CoordinatesType;

export type EnemyPositionType = CoordinatesType;

export type TracePositionType = CoordinatesType;

export type EnemyType = {
  position: EnemyPositionType,
}

export type CharacterDirectionType = 'ArrowUp' | 'ArrowDown' | 'ArrowRight' | 'ArrowLeft';

export type CharacterType = {
  position: Array<CharacterPositionType>,
  direction: CharacterDirectionType
};

type BaseObservers = {
  character: ObservableType,
  enemies: ObservableType
}

type StateType = {
  observers: BaseObservers,
  intervalID: number,
  character: CharacterType,
  enemies: Array<EnemyType>,
  input: {
    availableInputs: Array<string>,
    previousKeyPressed: string
  },
  screen: {
    traceToErase: {
      position: TracePositionType
    },
    screenMapCoordinates: Array<CoordinatesType>
  },
  isItNeedToSpawnAnEnemy: boolean,
};

const state: StateType = {
  observers: { character: new Observable(), enemies: new Observable()},
  intervalID: 0,
  
  character: {
    position: [
      { x: SCREEN_CENTER_X, y: SCREEN_CENTER_Y },
      { x: SCREEN_CENTER_X + PLAYER_WIDTH, y: SCREEN_CENTER_Y },
      { x: SCREEN_CENTER_X + PLAYER_WIDTH * 2, y: SCREEN_CENTER_Y },
    ],
    direction: 'ArrowRight',
  },
  enemies: [],
  input: {
    availableInputs: ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'],
    previousKeyPressed: ''
  },

  screen: {
    traceToErase: {
      position: { x: SCREEN_CENTER_X, y: SCREEN_CENTER_Y },
    },
    
    screenMapCoordinates: getAllCoordinatesOnTheScreen()
  },
  
  isItNeedToSpawnAnEnemy: false
}

state.enemies.push(randomAnEnemyPosition(state));

export { state, StateType }