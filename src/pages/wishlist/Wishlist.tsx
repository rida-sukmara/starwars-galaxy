import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../Store';
import {
  Nav,
  MenuItem,
  Main,
  Container,
} from '../home/Home.styles';

import PlanetCard from '../../components/planet/PlanetCard';
import { Title } from '../../components/planet';

function WishList() {
  const planetState = useSelector((_state: AppStore) => _state.planet);
  const { wishlist } = planetState;
  const isWishlist: boolean = true;

  return (
    <Container>
      <Nav>
        <MenuItem href="/">Star Wars Galaxy</MenuItem>
        <MenuItem href="/wishlist">Wishlist</MenuItem>
      </Nav>
      <Main>
        <Title>Wishlist: </Title>
        {wishlist.map((_planet, index) => (
          <PlanetCard
            wishlist={isWishlist}
            id={index + 1}
            {..._planet}
            key={_planet.name}
          />
        ))}
      </Main>
    </Container>
  );
}

export default WishList;
