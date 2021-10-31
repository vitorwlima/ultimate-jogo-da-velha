import * as S from './styles'
import { Button } from 'src/components'
import { ViewProps, ViewScreens } from 'src/types'

const Menu = ({ currentScreen, setCurrentScreen }: ViewProps) => {
  if (currentScreen !== ViewScreens.MENU) {
    return null
  }

  const createRoom = () => {
    setCurrentScreen(ViewScreens.CREATE)
  }

  const joinRoom = () => {
    setCurrentScreen(ViewScreens.JOIN)
  }

  return (
    <S.Container>
      <S.Title>ULTIMATE JOGO DA VELHA</S.Title>
      <S.ButtonsWrapper>
        <Button onClick={createRoom} color='lightSecondary'>
          Criar sala
        </Button>
        <Button onClick={joinRoom} color='lightSecondary'>
          Entrar em sala
        </Button>
      </S.ButtonsWrapper>
    </S.Container>
  )
}

export { Menu }
