import { StateType } from "..";

export const gameAvailableInputSelector = (state: StateType) => {
  return state.game.availableInput;
}

export const stateObserverSelector = (state: StateType) => {
  return state.observer;
}

export const playerPositionSelector = (state: StateType) => {
  return {
    x: state.player.position.x,
    y: state.player.position.y,
  }
}