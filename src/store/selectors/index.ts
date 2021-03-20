import { StateType } from "..";

export const gameAvailableInputSelector = (state: StateType) => {
  return state.input.availableInputs;
}

export const characterObserverSelector = (state: StateType) => {
  return state.observers.character;
}

export const enemiesObserverSelector = (state: StateType) => {
  return state.observers.enemies;
}

export const characterSelector = (state: StateType) => {
  return state.character;
}

export const traceToEraseSelector = (state: StateType) => {
  return state.screen.traceToErase;
}

export const isItNeedToSpawnAnEnemySelector = (state: StateType) => {
  return state.isItNeedToSpawnAnEnemy;
}