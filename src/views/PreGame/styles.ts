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
  margin-bottom: 6rem;
`

export const InputsWrapper = styled.div`
  width: 100%;
  max-width: 48rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 48rem;
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
`
