import { ReactNode } from 'react'
import { Container } from './styles'

type ButtonProps = {
  children: ReactNode
  color: 'opaquePrimary' | 'lightSecondary'
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, color, onClick }: ButtonProps) => {
  return (
    <Container onClick={onClick} color={color}>
      {children}
    </Container>
  )
}

export { Button }
