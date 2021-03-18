import { StateType } from "..";

export const gameAvailableInputSelector = (state: StateType) => {
  return state.input.availableInputs;
}

export const stateObserverSelector = (state: StateType) => {
  return state.observer;
}

export const characterSelector = (state: StateType) => {
  return state.character;
}

export const traceToEraseSelector = (state: StateType) => {
  return state.screen.traceToErase;
}