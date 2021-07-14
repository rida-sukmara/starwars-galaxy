import React from 'react';

import { Planet } from '../../actions/PlanetActionTypes';
import {
  Container,
  Header,
  Title,
  Diameter,
  DescriptionContainer,
  Description,
} from './PlanetCard.styles';

const PlanetCard = React.forwardRef<any, Planet>(({
  name,
  diameter,
  gravity,
  terrain,
  created,
}: Planet, ref) => (
  <Container href="#" ref={ref}>
    <Header>
      <Title>{name}</Title>
      <Diameter>{`Diameter: ${diameter}`}</Diameter>
    </Header>
    <DescriptionContainer>
      <Description>{`Terrain: ${terrain}`}</Description>
      <Description>{`Gravity: ${gravity}`}</Description>
      <Description>{`Created: ${created}`}</Description>
    </DescriptionContainer>
  </Container>
));

export default PlanetCard;
