import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../player";
import { StateType } from "../store";

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

export const drawCharacter = (screen: CanvasRenderingContext2D, state: StateType) => {
  screen.clearRect(0, 0, SCREEN_MAX_X, SCREEN_MAX_Y);

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