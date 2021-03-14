import { playerCoordinatesLimits } from "../index";
import { StateType } from "../../store";
import { changePlayerPositionState } from "../../store/actions";
import { playerPositionSelector } from "../../store/selectors";

const playerActions = (state: StateType) => {
  const {x, y} = playerPositionSelector(state);
  const {width: horizontalLimit, height: verticalLimit} = playerCoordinatesLimits(); 

  return {
    ArrowDown: () => {
      if (y + 10 <= verticalLimit) {
        changePlayerPositionState(state, x, y + 10)
      }
    },

    ArrowUp: () => {
      if (y - 10 >= 0) {
        changePlayerPositionState(state, x, y - 10)
      }
    },

    ArrowRight: () => {
      if (x + 10 <= horizontalLimit) {
        changePlayerPositionState(state, x + 10, y)
      }
    },

    ArrowLeft: () => {
      if (x - 10 >= 0) {
        changePlayerPositionState(state, x - 10, y)
      }
    },
  }
}

export default playerActions;
