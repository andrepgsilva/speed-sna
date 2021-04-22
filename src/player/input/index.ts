import { state } from "../../store";
import { gameAvailableInputSelector, characterObserverSelector, enemiesObserverSelector, isItNeedToSpawnAnEnemySelector } from "../../store/selectors";
import playerActions from "../actions";

const playerInput = (key: string) => {
  const characterObserver = characterObserverSelector(state);
  const enemiesObserver = enemiesObserverSelector(state);
  const availableInputs = gameAvailableInputSelector(state);
  const isItNeedToSpawn = isItNeedToSpawnAnEnemySelector(state);

  if (! availableInputs.includes(key)) return;

  playerActions(state)[key]();
  
  if (isItNeedToSpawn) {
    enemiesObserver.notify(key);
  }

  characterObserver.notify(key);
}

export const setupPlayerInput = (context) => {
  context.addEventListener('keydown', (event) => {
    state.input.previousKeyPressed = event.key;
    
    window.clearInterval(state.intervalID);

    const timerId = window.setInterval(() => {
      playerInput(event.key);
    }, 150);

    state.intervalID = timerId;
  });
}