import React from 'react';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  Title,
  Button,
  Label,
  LocationContainer,
  LocationHeader,
  LocationLabel,
  LocationLabelSub,
  LabelContainer,
  ImgContant,
  ServiceContainer,
  ServiceTitle,
  ServiceCardContainer,
  ServiceCard,
  ServiceLabel,
} from './styles';

import Options from '../../components/Options';

export default function Pay() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={25} color="#10c86e" />
          <Title>Transações</Title>
        </Header>

        <Button>
          <Ionicons name="search-sharp" size={20} color="#fff" />
          <Label>
            O que você que pagar?
          </Label>
        </Button>

        <Options />

        <LocationContainer>
          <LocationHeader>
            <Ionicons name="md-location-outline" size={30} color="#10c86e"/>
            <LabelContainer>
              <LocationLabel>Locais próximos</LocationLabel>
              <LocationLabelSub>Confira estabelecimentos perto de você</LocationLabelSub>
            </LabelContainer>
          </LocationHeader>

          <ImgContant />
        </LocationContainer>

        <ServiceContainer>
          <ServiceTitle>Serviços</ServiceTitle>
          <ServiceCardContainer>
            <ServiceCard>
              <ServiceLabel>Recarga {'\n'}de celular</ServiceLabel>
            </ServiceCard>
            <ServiceCard>
              <ServiceLabel>Cartão transporte</ServiceLabel>
            </ServiceCard>
            <ServiceCard>
              <ServiceLabel>Shell Box</ServiceLabel>
            </ServiceCard>
          </ServiceCardContainer>
        </ServiceContainer>
      </Container>
    </Wrapper>
  );
}
