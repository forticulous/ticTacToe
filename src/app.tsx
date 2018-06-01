import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MainContent from './components/main-content'
import store from './redux/store'

const root = document.getElementById('root')

if (root) {
  render(
    <Provider store={store}>
      <MainContent/>
    </Provider>
  , root)
}
