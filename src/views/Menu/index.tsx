import * as S from './styles'
import { Button } from 'src/components'

const Menu = () => {
  return (
    <S.Container>
      <S.Title>ULTIMATE JOGO DA VELHA</S.Title>
      <S.ButtonsWrapper>
        <Button onClick={() => {}} color='lightSecondary'>
          Criar sala
        </Button>
        <Button onClick={() => {}} color='lightSecondary'>
          Entrar em sala
        </Button>
      </S.ButtonsWrapper>
    </S.Container>
  )
}

export { Menu }
