import styled from 'styled-components'
import { colors } from '../../styles/colors'

type ContainerProps = {
  color: 'opaquePrimary' | 'lightSecondary'
}

const getTextColor = (color: string) => {
  return {
    opaquePrimary: colors.white,
    lightSecondary: colors.black,
  }[color]
}

export const Container = styled.button<ContainerProps>`
  background-color: ${props => colors[props.color]};
  color: ${props => getTextColor(props.color)};
  border-radius: 0.6rem;
  padding: 1.4rem 4rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: 0.3s filter;

  &:hover {
    filter: brightness(0.9);
  }
`
