import Observable, { ObservableType } from '../Observable';

type StateType = {
  observer: ObservableType,
  player: {
    position: {
      x: number,
      y: number
    },
  },

  game: {
    availableInput: Array<string>
  }
};

const state: StateType = {
  observer: new Observable(),
  player: {
    position: {
      x: 0,
      y: 0
    }
  },

  game: {
    availableInput: ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft']
  }
}

export { state, StateType }