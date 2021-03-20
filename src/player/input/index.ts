import { state } from "../../store";
import { changeTheIsItNeedToSpawnAnEnemyState } from "../../store/actions";
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
    playerInput(event.key);
  });
}