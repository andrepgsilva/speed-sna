import { canvasCoordinates } from "../screen";

export const PLAYER_WIDTH = 20;
export const PLAYER_HEIGHT = 20;

export const playerCoordinatesLimits = () => {
  let {width, height} = canvasCoordinates();

  return {
    width: width - PLAYER_WIDTH,
    height: height - PLAYER_HEIGHT,
  }
}