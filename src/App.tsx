import { useState } from 'react'

import { Menu, PreGame } from 'src/views'
import { ViewScreens } from 'src/types'

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(ViewScreens.MENU)

  return (
    <main>
      <Menu currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      <PreGame currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </main>
  )
}

export { App }
