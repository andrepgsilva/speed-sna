import { StateType } from "..";

export const gameAvailableInputSelector = (state: StateType) => {
  return state.input.availableInputs;
}

export const stateObserverSelector = (state: StateType) => {
  return state.observer;
}

export const playerPositionSelector = (state: StateType) => {
  return state.character;
}