import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../player";
import { StateType } from "../store";
import { addTraceToEraseState } from "../store/actions";
import { traceToEraseSelector } from "../store/selectors";

const {width: screenWidth, height: screenHeight} = canvasCoordinates();

export const SCREEN_MAX_X = screenWidth;
export const SCREEN_MAX_Y = screenHeight;
export const SCREEN_CENTER_X = screenWidth / 2;
export const SCREEN_CENTER_Y = screenHeight / 2; 

function canvasCoordinates() {
  const canvas = document.getElementById('game') as HTMLCanvasElement;

  return {
    width: canvas.width,
    height: canvas.height
  }
}

const clearCharacterTrace = (screen: CanvasRenderingContext2D, state: StateType) => {
  let traceToErase = traceToEraseSelector(state).position;

  screen.clearRect(traceToErase.x, traceToErase.y, PLAYER_WIDTH, PLAYER_HEIGHT);
  const characterTail = state.character.position[0];
    
  addTraceToEraseState(state, characterTail);
}

export const drawCharacter = (screen: CanvasRenderingContext2D, state: StateType, clearFigures: boolean = true) => {
  if (clearFigures) {
    clearCharacterTrace(screen, state);
  }

  state.character.position.forEach((characterPartPosition, index) => {
    screen.fillStyle = "black";

    if (index === 0) {
      screen.fillStyle = "green";
    }
    
    if (index === state.character.position.length - 1) {
      screen.fillStyle = "red";
    }

    screen.fillRect(
      characterPartPosition.x, 
      characterPartPosition.y, 
      PLAYER_WIDTH, 
      PLAYER_HEIGHT
    );
  });
}

export const drawEnemies = (screen: CanvasRenderingContext2D, state: StateType) => {
  state.enemies.forEach(enemy => {
    screen.fillStyle = "black";

    screen.fillRect(
      enemy.position.x, 
      enemy.position.y, 
      PLAYER_WIDTH, 
      PLAYER_HEIGHT
    );
  });
}