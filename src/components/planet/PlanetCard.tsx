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

type PlanetProps = {
  id: number;
  wishlist: boolean;
}

const PlanetCard = React.forwardRef<any, Planet & PlanetProps>(({
  id,
  name,
  diameter,
  gravity,
  terrain,
  created,
  wishlist,
}: Planet & PlanetProps, ref) => (
  <Container href={wishlist ? '#' : `/planets/${id}`} ref={ref}>
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
