import * as React from 'react'
import { render } from 'react-dom'
import MainContent from './components/main-content'

const root = document.getElementById('root')

if (root) {
  render(
    <div>
      <MainContent/>
    </div>
  , root)
}
