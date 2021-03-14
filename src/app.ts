import { state, StateType } from './store';
import { stateObserverSelector } from './store/selectors';
import { draw } from './screen';
import { setupPlayerInput } from './player/input';

const main = (state: StateType) => {
  const page = document.querySelector('html');
  const canvas = document.getElementById('game') as HTMLCanvasElement;
  const context = canvas.getContext('2d');

  draw(context, state);

  const stateObserver = stateObserverSelector(state);

  stateObserver.subscribe(() => requestAnimationFrame(() => draw(context, state)));

  setupPlayerInput(page);
}

main(state);