import React from 'react'
import * as S from './styles'

type InputProps = {
  label: string
  name: string
  value: string | number | readonly string[]
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ label, name, value, setValue }: InputProps) => {
  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input value={value} name={name} id={name} onChange={e => setValue(e.target.value)} />
    </S.Container>
  )
}

export { Input }
