type ActionsType = SetCountActionType | SetErrorActionType | SetMaxCountActionType | SetMinCountActionType;

const SET_COUNT = 'SET_COUNT'
const SET_ERROR = 'SET_ERROR'
const SET_MAX_COUNT = 'SET_MAX_COUNT'
const SET_START_COUNT = 'SET_START_COUNT'

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
      return {...state, count: action.count}
    case "SET_MAX_COUNT":
      return {...state, maxCount: action.count}
    case "SET_START_COUNT":
      return {...state, startCount: action.count}
    case "SET_ERROR":
      return {...state, error: action.error}
    default:
      return state
  }
}

type SetCountActionType = ReturnType<typeof setCount>
export const setCount = (count: number) => {
  return { type: SET_COUNT, count } as const
}
type SetErrorActionType = ReturnType<typeof setError>
export const setError = (error: string) => {
  return { type: SET_ERROR, error } as const
}
type SetMaxCountActionType = ReturnType<typeof setMaxCount>
export const setMaxCount = (count: number) => {
  return { type: SET_MAX_COUNT, count } as const
}
type SetMinCountActionType = ReturnType<typeof setStartCount>
export const setStartCount = (count: number) => {
  return { type: SET_START_COUNT, count } as const
}



