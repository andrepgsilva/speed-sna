import { StateType } from "..";

export const changePlayerPositionState = (state: StateType, x: number, y: number) => {
  state.player.position.x = x;
  state.player.position.y = y;
}