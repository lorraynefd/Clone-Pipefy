import React from 'react'
import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1"/>
      </header>
      <p>Comprar agenda</p>
      <img src="https://api.adorable.io/avatars/400/abott@adorable.io.png" alt=""/>
    </Container>
  )
}
