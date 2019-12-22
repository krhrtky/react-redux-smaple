import * as React from 'react'
import { render } from 'react-dom'
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from './store'
import {decrement, increment} from './store/actions/actionCreator'

const counterSelector = state => state.count;

const Counter = () => {
  const count = useSelector(counterSelector)
  const dispatch = useDispatch()
  return (
      <>
        Count: { count }
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </>
  )
}

const Main = () => (
    <Provider store={store}>
      <div>main</div>
      <Counter/>
    </Provider>
)

render(<Main/>, document.getElementById('app'))
