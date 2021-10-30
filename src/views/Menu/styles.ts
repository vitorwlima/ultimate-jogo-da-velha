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
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 192px;
`
