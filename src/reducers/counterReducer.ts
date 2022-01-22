type ActionsType = SetCountActionType | SetErrorActionType | SetMaxCountActionType | SetMinCountActionType | SetStartingValuesActionType;

const SET_COUNT = 'SET_COUNT'
const SET_ERROR = 'SET_ERROR'
const SET_MAX_COUNT = 'SET_MAX_COUNT'
const SET_START_COUNT = 'SET_START_COUNT'
const SET_STARTING_VALUES = 'SET_STARTING_VALUES'

export type CounterStateType = {
  count: number,
  startCount: number,
  maxCount: number,
  error: string,
  startingMessage: string
}

let initialState: CounterStateType = {
  count: 0,
  startCount: 0,
  maxCount: 5,
  error: '',
  startingMessage: 'enter values and press "set"'
}

export const counterReducer = (state = initialState, action: ActionsType): CounterStateType => {
  switch (action.type) {
    case "SET_COUNT":
    case "SET_MAX_COUNT":
    case "SET_START_COUNT":
    case "SET_ERROR":
    case "SET_STARTING_VALUES":
      return {...state, ...action.payload}
    default:
      return state
  }
}

type SetCountActionType = ReturnType<typeof setCount>
export const setCount = (count: number) => {
  return {type: SET_COUNT, payload: {count}} as const
}
type SetErrorActionType = ReturnType<typeof setError>
export const setError = (error: string) => {
  return {type: SET_ERROR, payload: {error}} as const
}
type SetMaxCountActionType = ReturnType<typeof setMaxCount>
export const setMaxCount = (maxCount: number) => {
  return {type: SET_MAX_COUNT, payload: {maxCount}} as const
}
type SetMinCountActionType = ReturnType<typeof setStartCount>
export const setStartCount = (startCount: number) => {
  return {type: SET_START_COUNT, payload: {startCount}} as const
}
type SetStartingValuesActionType = ReturnType<typeof setStartingValuesAC>
export const setStartingValuesAC = (count: number, startCount: number, maxCount: number,  error: string) => {
  return {type: SET_STARTING_VALUES, payload: {count, startCount, maxCount, error}} as const
}



