import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../player";
import { StateType } from "../store";
import { playerPositionSelector } from "../store/selectors";

export const canvasCoordinates = () => {
  const canvas = document.getElementById('game') as HTMLCanvasElement;

  return {
    width: canvas.width,
    height: canvas.height
  }
}

export const draw = (screen, state: StateType) => {
  const {x, y} = playerPositionSelector(state);
  const {width: canvasWidth, height: canvasHeight} = canvasCoordinates();

  screen.clearRect(0, 0, canvasWidth, canvasHeight);
  
  screen.fillRect(x, y, PLAYER_WIDTH, PLAYER_HEIGHT);
}
