import { CharacterDirectionType, StateType } from "..";

export const changeCharacterPartPositionState = (state: StateType, index: number, x: number, y: number) => {
  state.character.position[index] = { x, y };
}

export const changeCharacterDirectionState = (state: StateType, direction: CharacterDirectionType) => {
  state.character.direction = direction;
}