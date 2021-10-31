import styled from 'styled-components'

import { colors } from 'src/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9.6rem;
`

export const Title = styled.h1`
  color: ${colors.secondary};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 19.2rem;
`
