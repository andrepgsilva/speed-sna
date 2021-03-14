import { state } from "../../store";
import { gameAvailableInputSelector, stateObserverSelector } from "../../store/selectors";
import playerActions from "../actions";

const playerInput = (key: string) => {
  const stateObserver = stateObserverSelector(state);
  const availableInputs = gameAvailableInputSelector(state);

  if (! availableInputs.includes(key)) return;

  playerActions(state)[key]();
  stateObserver.notify(key);
}

export const setupPlayerInput = (context) => {
  context.addEventListener('keydown', (event) => {
    playerInput(event.key);
  });
}