import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainContent from './components/main-content'

const root = document.getElementById('root')

if (root) {
  render(
    <Provider store={store}>
      <MainContent/>
    </Provider>
  , root)
}
