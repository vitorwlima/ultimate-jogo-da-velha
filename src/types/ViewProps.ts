import React from 'react'
import { ViewScreens } from '.'

type ViewProps = {
  currentScreen: ViewScreens
  setCurrentScreen: React.Dispatch<React.SetStateAction<ViewScreens>>
}

export type { ViewProps }
