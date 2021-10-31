import styled from 'styled-components'

import { colors } from 'src/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 1rem;
  border: none;
  outline: none;
  background-color: ${colors.grey};
  color: ${colors.black};
`

export const Label = styled.label`
  margin-bottom: 0.8rem;
`
