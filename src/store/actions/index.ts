import { CharacterDirectionType, EnemyPositionType, StateType, TracePositionType } from "..";

export const changeCharacterPartPositionState = (state: StateType, index: number, x: number, y: number) => {
  state.character.position[index] = { x, y };
}

export const changeCharacterDirectionState = (state: StateType, direction: CharacterDirectionType) => {
  state.character.direction = direction;
}

export const addEnemyPositionState = (state: StateType, enemyCoordinates: EnemyPositionType) => {
  state.enemies.push({ position: enemyCoordinates });
}

export const addTraceToEraseState = (state: StateType, traceToEraseCoordinates: TracePositionType) => {
  state.screen.traceToErase.position = traceToEraseCoordinates;
}