import { INCREMENT, DECREMENT, SET_COUNT } from './index'

export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}

export function setCount(amount: number) {
  return { type: SET_COUNT, payload: { amount }}
}
