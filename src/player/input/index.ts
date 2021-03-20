import { state } from "../../store";
import { gameAvailableInputSelector, characterObserverSelector } from "../../store/selectors";
import playerActions from "../actions";

const playerInput = (key: string) => {
  const characterObserver = characterObserverSelector(state);
  const availableInputs = gameAvailableInputSelector(state);

  if (! availableInputs.includes(key)) return;

  playerActions(state)[key]();
  
  characterObserver.notify(key);
}

export const setupPlayerInput = (context) => {
  context.addEventListener('keydown', (event) => {
    playerInput(event.key);
  });
}