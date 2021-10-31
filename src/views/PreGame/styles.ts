import styled from 'styled-components'

import { colors } from 'src/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;
`

export const Title = styled.h1`
  color: ${colors.secondary};
  margin-bottom: 60px;
`

export const InputsWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`
