import { state, StateType } from './store';
import { stateObserverSelector } from './store/selectors';
import { drawCharacter } from './screen';
import { setupPlayerInput } from './player/input';

const main = (state: StateType) => {
  const page = document.querySelector('html');
  const canvas = document.getElementById('game') as HTMLCanvasElement;
  const context = canvas.getContext('2d');

  drawCharacter(context, state);

  const stateObserver = stateObserverSelector(state);

  stateObserver.subscribe(() => {
    requestAnimationFrame(() => drawCharacter(context, state))
  });

  setupPlayerInput(page);
}

main(state);