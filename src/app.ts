import { state, StateType } from './store';
import { characterObserverSelector, enemiesObserverSelector } from './store/selectors';
import { drawCharacter, drawEnemies } from './screen';
import { setupPlayerInput } from './player/input';
import { addAnEnemyInState } from './enemies';
import { removeLastEnemyPositionState } from './store/actions';

const main = (state: StateType) => {
  const page = document.querySelector('html');
  const canvas = document.getElementById('game') as HTMLCanvasElement;
  
  const context = canvas.getContext('2d');

  context.imageSmoothingEnabled = true;
  drawCharacter(context, state, false);
  drawEnemies(context, state);

  const characterObserver = characterObserverSelector(state);
  const enemiesObserver = enemiesObserverSelector(state);

  characterObserver.subscribe(() => {
    requestAnimationFrame(() => {
      drawCharacter(context, state);
    });
  });

  enemiesObserver.subscribe(() => {
    removeLastEnemyPositionState(state);
    addAnEnemyInState(state);

    drawEnemies(context, state);
  });

  setupPlayerInput(page);
}

main(state);