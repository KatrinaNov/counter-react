type ActionsType =
  SetCountActionType
  | SetErrorActionType
  | SetMaxCountActionType
  | SetMinCountActionType
  | SetStartingValuesActionType;

const SET_COUNT = 'SET_COUNT'
const SET_ERROR = 'SET_ERROR'
const SET_MAX_COUNT = 'SET_MAX_COUNT'
const SET_START_COUNT = 'SET_START_COUNT'
const SET_STARTING_VALUES = 'SET_STARTING_VALUES'

export type CounterStateType = {
  count: number
  startCount: number
  maxCount: number
  error: boolean
  message: 'enter values and press "set"' | '' | 'Invalid value!'
}

let initialState: CounterStateType = {
  count: 0,
  startCount: 0,
  maxCount: 5,
  error: false,
  message: 'enter values and press "set"',
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
  return {
    type: SET_COUNT,
    payload: {count},
  } as const
}
type SetErrorActionType = ReturnType<typeof setError>
export const setError = () => {
  return {
    type: SET_ERROR,
    payload: {
      error: true,
      message: 'Invalid value!',
    }
  } as const
}
type SetMaxCountActionType = ReturnType<typeof setMaxCount>
export const setMaxCount = (maxCount: number) => {
  return {
    type: SET_MAX_COUNT,
    payload: {
      maxCount,
      error: false,
      message: 'enter values and press "set"',
    }
  } as const
}
type SetMinCountActionType = ReturnType<typeof setStartCount>
export const setStartCount = (startCount: number) => {
  return {
    type: SET_START_COUNT,
    payload: {
      startCount,
      error: false,
      message: 'enter values and press "set"',
    }
  } as const
}
type SetStartingValuesActionType = ReturnType<typeof setStartingValuesAC>
export const setStartingValuesAC = (count: number, startCount: number, maxCount: number) => {
  return {
    type: SET_STARTING_VALUES,
    payload: {
      count,
      startCount,
      maxCount,
      error: false,
      message: '',
    }
  } as const
}



