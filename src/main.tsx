import React from 'react'
import ReactDOM from 'react-dom'

import { App } from 'src/App'
import GlobalStyles from 'src/styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
