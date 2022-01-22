import {combineReducers, createStore} from "redux";
import {counterReducer} from "../reducers/counterReducer";
import {loadState, saveState} from "../utils/localStorage-utils";

const rootReducer = combineReducers({
  counter: counterReducer,
 })

// непосредственно создаём store
export const store = createStore(rootReducer, loadState());
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// сохраняем в localStorage
store.subscribe(() => {
  saveState({
    counter: store.getState().counter
  });
  localStorage.setItem('state', JSON.stringify(store.getState()))
})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;