import { state, StateType } from './store';
import { characterObserverSelector } from './store/selectors';
import { drawCharacter, drawEnemies } from './screen';
import { setupPlayerInput } from './player/input';

const main = (state: StateType) => {
  const page = document.querySelector('html');
  const canvas = document.getElementById('game') as HTMLCanvasElement;
  
  const context = canvas.getContext('2d');

  context.imageSmoothingEnabled = true;
  drawCharacter(context, state, false);
  drawEnemies(context, state);

  const characterObserver = characterObserverSelector(state);

  characterObserver.subscribe(() => {
    requestAnimationFrame(() => drawCharacter(context, state))
  });

  setupPlayerInput(page);
}

main(state);