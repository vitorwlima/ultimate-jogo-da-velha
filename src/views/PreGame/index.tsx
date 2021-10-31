import { useState } from 'react'

import * as S from './styles'
import { Button, Input } from 'src/components'
import { ViewProps, ViewScreens } from 'src/types'

const PreGame = ({ currentScreen, setCurrentScreen }: ViewProps) => {
  const [nickName, setNickName] = useState('')
  const [roomName, setRoomName] = useState('')

  if (![ViewScreens.CREATE, ViewScreens.JOIN].includes(currentScreen)) {
    return null
  }

  const clearInputs = () => {
    setNickName('')
    setRoomName('')
  }

  const goToMenu = () => {
    setCurrentScreen(ViewScreens.MENU)
    clearInputs()
  }

  const buttonText = {
    '@create': 'Criar sala',
    '@join': 'Entrar na sala',
    '@menu': '',
  }[currentScreen]

  return (
    <S.Container>
      <S.Title>ULTIMATE JOGO DA VELHA</S.Title>
      <S.InputsWrapper>
        <Input value={nickName} setValue={setNickName} label='Seu apelido:' name='nickname' />
        <Input value={roomName} setValue={setRoomName} label='Sua sala:' name='room' />
      </S.InputsWrapper>
      <S.ButtonsWrapper>
        <Button color='opaquePrimary' onClick={goToMenu}>
          Voltar
        </Button>
        <Button color='lightSecondary' onClick={() => {}}>
          {buttonText}
        </Button>
      </S.ButtonsWrapper>
    </S.Container>
  )
}

export { PreGame }
