import { INCREMENT, DECREMENT, SET_COUNT } from '../actions/'
import {CreatorsToActions} from '../actions/helpers/creatorsToActions'
import * as creators from '../actions/actionCreator'

export type State = {
  count: number
  unit: string
}

type Actions = CreatorsToActions<typeof creators>

export function initialState(injects?: Partial<State>): State {
  return {
    count: 0,
    unit: 'pt',
    ...injects
  }
}

const reducer: (state: State, action: Actions) => State =
    (state= initialState() , action) => {
      switch (action.type) {
        case INCREMENT:
          return { ...state, count: state.count + 1 }
        case DECREMENT:
          return { ...state, count: state.count - 1 }
        case SET_COUNT:
          return { ...state, count: action.payload.amount }
        default:
          return state
      }
    }

export default reducer
