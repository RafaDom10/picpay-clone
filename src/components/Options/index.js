import React from 'react';

import { Container, Card, Label } from './styles';

const items = [
  {
    key: String(Math.random()),
    label: 'Pagar pessoas',
  },
  {
    key: String(Math.random()),
    label: 'Pix',
  },
  {
    key: String(Math.random()),
    label: `Pagar ${'\n'}Boleto`,
  },
  {
    key: String(Math.random()),
    label: 'Pagar nas maquininhas',
  },
  {
    key: String(Math.random()),
    label: 'Fazer cobrança',
  },
];

export default function Options() {
  return (
    <Container>
      {items.map((item) => (
        <Card key={item.key}>
            <Label>{item.label}</Label>
        </Card>
      ))}
    </Container>
  )
}
